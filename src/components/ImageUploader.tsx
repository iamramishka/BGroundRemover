import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Download, Loader2 } from 'lucide-react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';
import { removeBackground } from '../services/api';

export function ImageUploader() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    setError(null);
    setIsProcessing(true);
    setUploadProgress(0);

    // Show original image preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setOriginalImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    try {
      // Start progress animation
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => (prev >= 90 ? 90 : prev + 10));
      }, 500);

      // Process image
      const result = await removeBackground(file);
      setProcessedImage(result);
      setUploadProgress(100);
      clearInterval(progressInterval);
    } catch (err) {
      setError('Failed to process image. Please try again.');
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg'],
    },
    multiple: false,
  });

  const handleDownload = () => {
    if (processedImage) {
      const link = document.createElement('a');
      link.href = processedImage;
      link.download = 'processed-image.png';
      link.click();
    }
  };

  return (
    <>
      {/* Error Message */}
      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {/* Upload Area */}
      {!originalImage && (
        <div
          {...getRootProps()}
          className={`max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12 cursor-pointer transition-all duration-300
            ${isDragActive ? 'border-2 border-blue-500 shadow-2xl scale-105' : 
            'border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-xl'}`}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
              <Upload className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full mb-4 hover:bg-blue-700 transition-colors">
              Upload File
            </button>
            <p className="text-gray-500 dark:text-gray-400">
              or drop a file
            </p>
          </div>
        </div>
      )}

      {/* Processing Area */}
      {isProcessing && (
        <div className="mt-8 max-w-xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <Loader2 className="w-5 h-5 animate-spin dark:text-white" />
            <span className="text-gray-700 dark:text-gray-300">
              Processing image...
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Image Comparison */}
      {originalImage && processedImage && !isProcessing && (
        <div className="mt-8">
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src={originalImage}
                alt="Original"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src={processedImage}
                alt="Processed"
              />
            }
            className="rounded-2xl overflow-hidden shadow-lg"
          />
          
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => {
                setOriginalImage(null);
                setProcessedImage(null);
                setError(null);
              }}
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Upload New Image
            </button>
            <button
              onClick={handleDownload}
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Result
            </button>
          </div>
        </div>
      )}
    </>
  );
}