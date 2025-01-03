import React, { useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { imagetoBase64 } from "../utility/imagetoBase64";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NewProduct() {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const uploadImage = async (e) => {
    const data = await imagetoBase64(e.target.files[0]);
    setData((prev) => ({
      ...prev,
      image: data,
    }));
  };

  const serverDomain = import.meta.env.VITE_SERVER_DOMAIN;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, image, category, price } = data;
    console.log("Submitting this data", data);
     console.log(typeof(price));
    // Validate required fields
    if (!name || !image || !category || !price) {
      console.log("I received an error");
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch(`${serverDomain}/uploadProduct`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log("First log - server result", result);

      if (response.ok) {
        toast.success("Product uploaded successfully!");
         console.log("Second log - success result", result);

        setData({
          name: "",
          category: "",
          image: "",
          price: "",
          description: "",
        });
      } else {
        console.error("Here I got an error", result);
        toast.error(result.message || "Failed to upload product.");
      }
    } catch (error) {
      console.error("Error uploading product:", error);
      toast.error("An error occurred while uploading the product.");
    }
  };

  return (
    <div className="mt-4 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col p-6 rounded-lg drop-shadow-lg bg-white shadow-md max-h-screen overflow-auto"
      >
        <label htmlFor="name" className="text-gray-700 font-medium mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={data.name}  // Use value for the input field
          className="border border-gray-300 p-2 rounded-md mb-4"
          placeholder="Enter product name"
          onChange={handleOnChange}
        />

        <label htmlFor="category" className="text-gray-700 font-medium mb-1">
          Category
        </label>
        <select
          name="category"
          value={data.category}  // Use value for the select field
          className="border border-gray-300 p-2 rounded-md mb-3"
          onChange={handleOnChange}
        >
          <option value="">Select Category</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Icecream">Icecream</option>
          <option value="Dosa">Dosa</option>
          <option value="Pizza">Pizza</option>
          <option value="Rice">Rice</option>
          <option value="Cake">Cake</option>
          <option value="Burger">Burger</option>
          <option value="Sandwitch">Sandwitch</option>
          <option value="Chicken">Chicken</option>
          <option value="Idly_Dosa">Idly_Dosa</option>
          <option value="Paneer">Paneer</option>
        </select>

        <label htmlFor="image" className="text-gray-700 font-medium cursor-pointer">
          Image
          <div className="h-40 w-full my-2 rounded-md flex items-center justify-center bg-gray-100">
            {data.image ? (
              <img
                src={data.image}
                alt="product_image"
                className="h-40 w-full object-cover rounded-md mt-2"
              />
            ) : (
              <span>
                <MdOutlineFileUpload className="text-3xl" />
                <p>Upload Image</p>
              </span>
            )}
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={uploadImage}
              className="hidden"
            />
          </div>
        </label>

        <label htmlFor="price" className="text-gray-700 font-medium mb-1">
          Price
        </label>
        <input
          type="text"
          name="price"
          value={data.price}  // Use value for the input field
          className="border border-gray-300 p-2 rounded-md mb-2"
          placeholder="Price"
          onChange={handleOnChange}
        />

        <label htmlFor="description" className="text-gray-700 font-medium mb-2">
          Description
        </label>
        <textarea
          name="description"
          value={data.description}  // Use value for the textarea field
          rows={2}
          className="border border-gray-300 p-2 rounded-md mb-4"
          onChange={handleOnChange}
        />

        <button
          type="submit"
          className="w-full mx-auto mt-2 bg-green-500 text-white p-2 rounded-md font-semibold"
        >
          Save
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default NewProduct;
