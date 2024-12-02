import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdOutlineFileUpload } from 'react-icons/md';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = ({url}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [imageFile, setImageFile] = useState(null); // State to hold the image file
  const [imagePreview, setImagePreview] = useState(null);


  const onSubmit = async (data) => {
    console.log('Form Data (before processing):', data);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);

    if (imageFile) {
      formData.append("image", imageFile);
    } else {
      console.log("No image selected.");
      return;
    }

    try {
      const response = await axios.post(`${url}/api/food/add`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        console.log('Product added successfully');
        toast.success(response.data.message)
        reset(); 
        setImageFile(null); 
        setImagePreview(null);
      } else {
        console.log('Failed to add product');
        toast.error(response.data.message );
      }
    } catch (error) {
      console.error('Error while submitting form:', error);
    }
    await new Promise((resolve) => setTimeout(resolve, 2000)); 
  };

  // Handle image upload and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file); // Store the file in state
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  return (
    <div className="m-16 flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md flex flex-col p-6 rounded-lg drop-shadow-lg bg-white shadow-md overflow-auto"
      >
        <label htmlFor="name" className="text-gray-700 font-medium mb-1">
          Product Name
        </label>
        <input
          type="text"
          id="name"
          className="border border-gray-300 p-2 rounded-md mb-4"
          placeholder="Enter product name"
          {...register('name', { required: 'Product name is required' })}
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}

        <label htmlFor="category" className="text-gray-700 font-medium mb-1">
          Category
        </label>
        <select
          id="category"
          className="border border-gray-300 p-2 rounded-md mb-3"
          {...register('category', { required: 'Please select a category' })}
        >
          <option value="">Select Category</option>
          <option value="salad">Salad</option>
          <option value="rolls">Rolls</option>
          <option value="desserts">Desserts</option>
          <option value="sandwich">Sandwich</option>
          <option value="cake">Cake</option>
          <option value="pure veg">Pure Veg</option>
          <option value="pasta">Pasta</option>
          <option value="noodles">Noodles</option>
        </select>
        {errors.category && (
          <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>
        )}

        <label htmlFor="image" className="text-gray-700 font-medium cursor-pointer">
          Image
          <div
            className={`h-40 w-full my-2 rounded-md flex items-center justify-center bg-gray-100 ${
              imagePreview ? 'hidden' : ''
            }`}
          >
            <MdOutlineFileUpload className="text-3xl" />
            <p>Upload Image</p>
          </div>

          {imagePreview ? (
            <div className="h-40 w-full my-2 rounded-md overflow-hidden">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <input
              type="file"
              id="image"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange} // Use the custom handler
            />
          )}
        </label>

        <label htmlFor="price" className="text-gray-700 font-medium mb-1">
          Product Price
        </label>
        <input
          type="number"
          id="price"
          placeholder="₹20"
          className="border border-gray-300 p-2 rounded-md mb-2"
          {...register('price', {
            required: 'Price is required',
            min: { value: 1, message: 'Price must be at least $1' },
          })}
        />
        {errors.price && (
          <p className="text-red-500 text-xs mt-1">{errors.price.message}</p>
        )}

        <label htmlFor="description" className="text-gray-700 font-medium mb-2">
          Description
        </label>
        <textarea
          id="description"
          placeholder="Write product description here"
          className="border border-gray-300 p-2 rounded-md mb-4"
          {...register('description', {
            required: 'Description is required',
            minLength: { value: 10, message: 'Minimum 10 characters required' },
          })}
        />
        {errors.description && (
          <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full mx-auto mt-2 p-2 rounded-md font-semibold ${
            isSubmitting
              ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
              : 'bg-green-500 text-white'
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Add Product'}
        </button>
      </form>
    </div>
  );
};

export default Add;
