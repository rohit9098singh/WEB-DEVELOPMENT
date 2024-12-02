import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaTrashAlt } from 'react-icons/fa';

const List = ({url}) => {
  const [list, setList] = useState([]);


  // Fetch the list of food items
  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/allfood`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Error fetching data");
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    try {
      const response = await axios.post(`${url}/api/food/removeFood`, { id });
      if (response.data.success) {
        toast.success("Food item deleted successfully");
        fetchList();
      } else {
        toast.error(response.data.message || "Failed to delete food item");
      }
    } catch (error) {
      console.error("Error deleting food item:", error);
      toast.error("Error deleting food item");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Food List</h1>
      
      {/* Table Header */}
      <div className="hidden sm:grid grid-cols-6 gap-4 font-semibold border-b-2 pb-2 text-sm sm:text-base">
        <p>Image</p>
        <p>Name</p>
        <p>Description</p>
        <p>Price</p>
        <p>Category</p>
        <p>Actions</p>
      </div>

      {/* Food Items */}
      <div >
        {list.length > 0 ? (
          list.map((item) => (
            <div
              key={item._id}
              className="grid grid-cols-3 sm:grid-cols-6 gap-4 items-center py-2 border-b text-sm sm:text-base"
            >
              <img
                src={`${url}/images/${item.image}`}
                alt={item.name}
                className="h-12 w-12 sm:h-16 sm:w-16 object-cover rounded"
              />
              <p>{item.name}</p>
              <p className="hidden sm:block text-gray-600">{item.description}</p>
              <p className="text-green-600 font-bold">₹{item.price}</p>
              <p className="text-gray-500">{item.category}</p>
              <button
                onClick={() => handleDelete(item._id)}
                className="text-red-800  "
              >
                <FaTrashAlt />
              </button>
            </div>
          ))
        ) : (
          <p className="mt-4 text-center text-gray-500">No food items available.</p>
        )}
      </div>
    </div>
  );
};

export default List;
