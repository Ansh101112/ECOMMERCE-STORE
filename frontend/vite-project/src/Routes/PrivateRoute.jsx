import React, { useState, useEffect } from "react";
import { useAuth } from "../context/auth";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Layout/Spinnner.jsx"; // Corrected the import path

export default function Privateroute() {
    const [loading, setLoading] = useState(true);
    const [auth] = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const authCheck = async () => {
            try {
                // Check if the user is authenticated based on some condition
                // For example, check if the user property exists in the auth context
                if (auth.user) {
                    // Authorized, allow access to the protected route
                    setLoading(false);
                } else {
                    // Not authorized, redirect to login or another route
                    navigate('/login'); // Redirect to login page
                }
            } catch (error) {
                console.error("Error checking authentication:", error);
                // Handle error, e.g., redirect to an error page
                navigate('/error'); // Redirect to error page
            }
        };

        authCheck();
    }, [auth, navigate]);

    // Ensure loading state is managed correctly
    if (loading) {
        return <Spinner />;
    }

    return <Outlet />;
}
