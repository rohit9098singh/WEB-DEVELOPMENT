async function imagetoBase64(file) {
  return new Promise((resolve, reject) => {
      const reader = new FileReader();

      // Check if the file is an image
      if (!file || !file.type.startsWith('image/')) {
          reject(new Error("File is not an image"));
          return;
      }

      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => {
          console.error("Error reading file:", err);
          reject(new Error("Failed to read file"));
      };
  });
}

export { imagetoBase64 };

