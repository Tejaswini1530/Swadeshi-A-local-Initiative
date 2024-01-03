import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    mobile: '',
  });
  const [emailError, setEmailError] = useState('');

  const params = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8065/api/user/${params.id}`);
      setUserData(response.data);
      setUpdatedData(response.data); // Set initial values for the form
    } catch (error) {
      setError('Error fetching user data');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setUpdatedData(userData); // Reset form data to current user data
    setEmailError(''); // Clear email validation error on cancel
  };

  const handleUpdate = async () => {
    try {
      // Validate email on the client side
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(updatedData.email)) {
        setEmailError('Please enter a valid email address');
        return;
      }

      // Format the data as per your server's expectations
      const formattedData = {
        firstName: updatedData.firstName,
        lastName: updatedData.lastName,
        email: updatedData.email,
        gender: updatedData.gender,
        mobile: updatedData.mobile,
      };

      const response = await axios.put(`http://localhost:8065/api/user/${params.id}`, formattedData);
      setUserData(response.data);
      setIsEditing(false);
      setEmailError(''); // Clear email validation error on successful update
    } catch (error) {
      console.error('Error updating user data', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setEmailError(''); // Clear email validation error on input change
  };

  return (
    
    <div className="container mt-4">
      <h1 className="mb-4">User Profile</h1>
      {loading && <p className="text-info">Loading user data...</p>}
      {error && <p className="text-danger">{error}</p>}
      {userData && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">User Details</h5>
            {isEditing ? (
              <form>
                <div className="form-group">
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={updatedData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={updatedData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={updatedData.email}
                    onChange={handleInputChange}
                  />
                  {emailError && <p className="text-danger">{emailError}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="gender"
                    name="gender"
                    value={updatedData.gender}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mobile">Mobile No:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobile"
                    name="mobile"
                    value={updatedData.mobile}
                    onChange={handleInputChange}
                  />
                </div>
               
                <button type="button" className="btn btn-primary mr-2" onClick={handleUpdate}>
                  Update
                </button>
                <button type="button" className="btn btn-secondary" onClick={handleCancelEdit}>
                  Cancel
                </button>
              </form>
            ) : (
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>First Name:</strong> {userData.firstName}</li>
                <li className="list-group-item"><strong>Last Name:</strong> {userData.lastName}</li>
                <li className="list-group-item"><strong>Email:</strong> {userData.email}</li>
                <li className="list-group-item"><strong>Gender:</strong> {userData.gender}</li>
                <li className="list-group-item"><strong>Mobile No:</strong> {userData.mobile}</li>
              </ul>
            )}
            {!isEditing && (
              <button type="button" className="btn btn-primary mt-3" onClick={handleEdit}>
                Edit
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;