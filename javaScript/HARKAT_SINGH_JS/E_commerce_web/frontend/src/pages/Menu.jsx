import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Allproduct from '../components/Allproduct';  // Ensure Allproduct component is correctly imported
import { addCartItem } from '../redux/productSlice';

function Menu() {
  const { filterby } = useParams();
  const productData = useSelector((state) => state.product.productList);

  // Debugging logs
  console.log("filterby:", filterby);
  console.log("productData:", productData);

  // Filter product after confirming productData is loaded
  const productDisplay = productData?.length
    ? productData.filter((el) => el._id === filterby)
    : [];

  console.log("productDisplay:", productDisplay);

  const dispatch=useDispatch();
  const handleAddCartProduct = (e) => {
    e.stopPropagation();
    dispatch(addCartItem(productDisplay));
};

  // Get the category of the main product to display related products
  const productCategory = productDisplay.length > 0 ? productDisplay[0].category : '';

  return (
    <div className="p-4 md:p-8 mt-5 flex justify-center">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-3xl overflow-hidden">
        {/* Main Product */}
        {productDisplay.length > 0 ? (
          <div className="flex flex-col md:flex-row">
            {/* Product Image */}
            <div className="w-full md:w-1/2 p-4 md:p-6 flex justify-center items-center bg-gray-100 rounded-l-3xl">
              <img
                src={productDisplay[0].image}
                alt={productDisplay[0].name}
                className="w-full h-auto max-h-72 object-cover rounded-xl hover:scale-105 transition-all"
              />
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 p-4 md:p-6 bg-green-50 flex flex-col justify-between rounded-r-3xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {productDisplay[0].name}
              </h2>
              <p className="text-xl font-medium text-gray-600 mb-4">
                ₹{productDisplay[0].price}
              </p>
              <p className="text-gray-700 mb-4">
                {productDisplay[0].description || 'This is a fantastic product that meets all your needs.'}
              </p>
              <div className="flex gap-4 justify-between mt-4">
                <button className="w-1/2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 rounded-xl transition duration-200 transform hover:scale-105 shadow-md">
                  Buy Now
                </button>
                <button onClick={handleAddCartProduct} className="w-1/2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 rounded-xl transition duration-200 transform hover:scale-105 shadow-md">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-8 text-center text-gray-500">
            <p>No matching product found</p>
          </div>
        )}

        {/* Related Products */}
        {productCategory && (
          <div className="mt-10">
            <h3 className="font-bold text-xl text-gray-800">Related Products</h3>
            <Allproduct heading="Explore More Products" category={productCategory} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;
