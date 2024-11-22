import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className=" bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center py-20">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to MyApp</h1>
        <p className="text-xl mb-6">
          Manage your products and accounts seamlessly with our powerful tools.
        </p>
        <div className="flex justify-center space-x-4">
          <Link 
            to="/signup" 
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-all"
          >
            Get Started
          </Link>
          <Link 
            to="/products" 
            className="bg-blue-800 px-6 py-3 rounded-full font-semibold text-white shadow-lg hover:bg-blue-700 transition-all"
          >
            View Products
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-center">Easy Signup</h3>
            <p className="text-gray-600 text-center">
              Create your account with just a few clicks and get started instantly.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-center">Product Management</h3>
            <p className="text-gray-600 text-center">
              Add, update, and delete products effortlessly using our platform.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-center">Secure Login</h3>
            <p className="text-gray-600 text-center">
              Keep your account and data secure with our robust authentication.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gray-800 text-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Ready to Get Started?</h2>
        <p className="text-center text-gray-300 mb-8">
          Join thousands of users who trust us to manage their products.
        </p>
        <div className="flex justify-center">
          <Link 
            to="/signup" 
            className="bg-blue-600 px-8 py-4 rounded-full font-semibold text-white shadow-lg hover:bg-blue-500 transition"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
