import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Orders = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const params = useParams();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8065/api/orders/${params.id}`);
            setUserData(response.data);
        } catch (error) {
            setError('Error fetching user data');
        } finally {
            setLoading(false);
        }
    };

    return (

        <div className="container mt-4">
            <h1 className="mb-4">Orders</h1>
            {loading && <p>Loading user Order data...</p>}
            {error && <p className="text-danger">{error}</p>}
            {userData && (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Order Details</h5>
                        <p className="card-text"><strong>Order Id:</strong> {userData.ordId}</p>
                        <p className="card-text"><strong>User Id:</strong> {userData.userId}</p>
                        <p className="card-text"><strong>Address:</strong> {userData.address}</p>
                        <p className="card-text"><strong>Order Date:</strong> {userData.orderDate}</p>
                        <p className="card-text"><strong>Order Status:</strong> {userData.orderStatus}</p>
                        <p className="card-text"><strong>Order Quantity:</strong> {userData.quantity}</p>
                    </div>
                </div>
            )}
        </div>

    );
};

export default Orders;