import React from 'react';

function Headers() {
  return (
    <div
      className="bg-cover min-h-[600px] mt-6 rounded-lg relative z-5"
      style={{ backgroundImage: 'url(/header_image.avif)' }}
    >
      {/* Content inside the header */}
      <div className="content flex flex-col items-start justify-center px-6 py-12 text-white relative z-10 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
          Order your favourite food here
        </h1>
        <p className="text-xl mb-6">
          Food you love, delivered with care. Tomato is your one-stop app for the
          best dining experiences at home. Enjoy speedy delivery and exceptional
          taste with every order.
        </p>
        <button className="bg-yellow-400 text-black py-2 px-6 rounded-full text-lg font-semibold hover:bg-yellow-500 transition duration-300">
          View Menu
        </button>
      </div>
    </div>
  );
}

export default Headers;
