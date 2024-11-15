import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';

function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    // Fetch logged-in user on component mount
    useEffect(() => {
        const user = localStorage.getItem('loggedInUser');
        setLoggedInUser(user);
    }, []);

    // Handle Logout Function
    const handleLogout = () => {
        handleSuccess('User Logged out');
        setTimeout(() => {
            localStorage.removeItem('token');
            localStorage.removeItem('loggedInUser'); // Clear after navigating
            navigate('/login');
        }, 1000);
    };

    // Fetch Products Data
    const fetchProducts = async () => {
        try {
            const url = "https://deploy-mern-app-1-api.vercel.app/products";
            const token = localStorage.getItem('token');
            const response = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${token}`, // Ensure correct Bearer token format
                },
            });

            if (response.ok) {
                const result = await response.json();
                setProducts(result);
            } else {
                handleError('Failed to fetch products');
            }
        } catch (err) {
            handleError('Error fetching products: ' + err.message);
        }
    };

    // Fetch products on component mount
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Welcome {loggedInUser || 'Guest'}</h1>
            {loggedInUser && <button onClick={handleLogout}>Logout</button>}
            <div>
                {products.length > 0 ? (
                    products.map((item, index) => (
                        <ul key={index}>
                            <li>
                                {item.name}: ${item.price}
                            </li>
                        </ul>
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </div>
            <ToastContainer />
        </div>
    );
}

export default Home;
