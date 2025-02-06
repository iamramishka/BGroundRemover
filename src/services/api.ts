interface RemoveBgResponse {
  data: Blob;
}

export async function removeBackground(file: File): Promise<string> {
  const formData = new FormData();
  formData.append('image_file', file);
  formData.append('size', 'auto');

  try {
    const response = await fetch(import.meta.env.VITE_API_URL, {
      method: 'POST',
      headers: {
        'X-Api-Key': import.meta.env.VITE_API_KEY,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Get the response as a blob
    const blob = await response.blob();
    
    // Convert blob to base64
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error('Error removing background:', error);
    throw error;
  }
}