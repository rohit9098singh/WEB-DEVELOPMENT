import React, { useState } from "react";

const BgChanger = ({ onBgChange }) => {
  const imageArray = [
    { id: 1, src: "/images/beach.avif", value: "Beach", alt: "Beach", color: "bg-blue-400" },
    { id: 2, src: "/images/envelope.avif", value: "Envelope", alt: "Envelope", color: "bg-green-300" },
    { id: 3, src: "/images/home.avif", value: "Home", alt: "Home", color: "bg-yellow-300" },
    { id: 4, src: "/images/oceanic.avif", value: "Oceanic", alt: "Oceanic", color: "bg-teal-300" },
    { id: 5, src: "/images/simple.avif", value: "Simple", alt: "Simple", color: "bg-stone-300" },
  ];

  const [image, setImage] = useState("/images/beach.avif");
  const [selectedColor, setSelectedColor] = useState(imageArray[0].color);

  const handleChange = (e) => {
    const selectedImage = imageArray.find(
      (image) => image.value === e.target.value
    );
    setImage(selectedImage.src);
    setSelectedColor(selectedImage.color);
    onBgChange(selectedImage.src); // Call the passed function to update the parent state
  };

  return (
    <div>
      <select
        className={`rounded-md px-4 py-2 outline-none ${selectedColor}`}
        onChange={handleChange}
      >
        {imageArray.map((image) => (
          <option key={image.id} value={image.value}>
            {image.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BgChanger;
