import React from 'react';
import { ArrowRight } from 'lucide-react';

const sampleImages = [
  {
    original: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    title: 'Professional Portrait',
    description: 'Perfect for LinkedIn profiles and business cards'
  },
  {
    original: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
    title: 'Casual Portrait',
    description: 'Ideal for social media and personal branding'
  },
  {
    original: 'https://images.unsplash.com/photo-1488161628813-04466f872be2',
    title: 'Fashion Photo',
    description: 'Great for e-commerce and fashion portfolios'
  }
];

export function Samples() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center dark:text-white">
          Try with these examples
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12">
          See how our AI technology handles different types of images
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sampleImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={image.original}
                  alt={image.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-blue-700 transition-colors">
                    Try this image
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {image.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}