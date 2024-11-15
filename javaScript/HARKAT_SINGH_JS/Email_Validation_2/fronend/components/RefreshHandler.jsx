import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function RefreshHandler({ setIsAuthenticated }) { // Accept `setIsAuthenticated` as a prop
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setIsAuthenticated(true); // Use the function correctly
            if (
                location.pathname === "/" ||
                location.pathname === "/login" ||
                location.pathname === "/signup"
            ) {
                navigate("/home", { replace: false });
            }
        }
    }, [location, navigate, setIsAuthenticated]);

    return null; // No UI needed
}

export default RefreshHandler;
