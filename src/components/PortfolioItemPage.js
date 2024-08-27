import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";


const PortfolioItem = () => {
    // Access route parameters
    const params = useParams();

    // Navigate to other routes programmatically
    const navigate = useNavigate();

    // Access location information
    const location = useLocation();
    return (
        <div>
            <h1>A thing I've done</h1>
            <p>This page is for the item with the id of {params.id} </p>
        </div>
    )
}

export default PortfolioItem