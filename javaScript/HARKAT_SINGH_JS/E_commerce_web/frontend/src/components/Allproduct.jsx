import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'; // Redux for state management
import FilterProduct from './FilterProduct'; // Ensure this is imported
import Cardfeature from './Cardfeature';

function Allproduct({ heading }) {
    const productData = useSelector((state) => state.product.productList);
    const [filterby, setFilterBy] = useState(""); // For storing the selected category
    const [dataFilter, setDataFilter] = useState([]); // Filtered product data

    // Initialize dataFilter with productData
    useEffect(() => {
        setDataFilter(productData);
    }, [productData]);

    // Function to handle category filter
    const handlefilterProduct = (category) => {
        const filtered = productData.filter(
            (el) => el.category.toLowerCase() === category.toLowerCase()
        );
        setDataFilter(filtered);
    };
    const loadingArrayFeature = new Array(10).fill(null);

    // Creating unique category list for filtering
    const categoryList = Array.from(new Set(productData.map((el) => el.category)));


    return (
        <div className="mt-10 px-4 md:px-8">
            {/* Heading Section */}
            <div>
                <h2 className="font-bold text-2xl text-slate-800 text-center">{heading}</h2>
            </div>

            {/* Filter Section */}
            <div className="flex gap-5 justify-center sm:justify-start mt-6 overflow-x-auto scrollbar-none">
                {categoryList && categoryList.length > 0 ? (
                    categoryList.map((category, index) => (
                        <FilterProduct
                            key={index}
                            category={category}
                            onClick={() => handlefilterProduct(category)}
                        />
                    ))
                ) : (
                    <div className="flex justify-center items-center h-full">
                        <p className='text-4xl font-semibold'>Loading...</p>
                    </div>  // Missing closing bracket added here
                )}
            </div>

            {/* Products Display Section */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
                {dataFilter.length > 0 ? (
                    dataFilter.map((el) => (
                        <Cardfeature
                            key={el._id}
                            id={el._id}
                            image={el.image}
                            name={el.name}
                            price={el.price}
                            category={el.category}
                        />
                    ))
                ) : (
                    loadingArrayFeature.map((_, index) => (
                        <Cardfeature key={index} loading="loading..." />
                      )) 
                )}
            </div>
        </div>
    );
}

export default Allproduct;
