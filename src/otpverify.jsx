import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './otp.css';
import Cookies from 'js-cookie';

const OtpVerification = () => {
  const [otp, setOtp] = useState('');
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      alert('User ID not found. Please sign up again.');
      navigate('/signup');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setOtp(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting OTP:', otp);
    console.log('Submitting User ID:', userId);
    try {
      const response = await axios.post(`http://localhost:3001/auth/verify-otp/${userId}`, { otp, userId });
      console.log('Server Response:', response.data);
      if (response.data.message) {
        const token = response.data.token;
        console.log('Received token:', token);
        localStorage.setItem('token', token);
        Cookies.set('token', token, { expires: 7 });
        console.log('Token set in local storage and cookies');
        navigate('/Home');
      } else {
        
        alert('Invalid OTP');
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        console.error('Server response:', error.response);
        alert(`Error: ${error.response.data.message || 'Invalid request'}`);
      } else {
        alert('An error occurred. Please try again.');
      }
    }
  };
  

  return (
    <div className="otp-container">
      <form onSubmit={handleSubmit}>
        <h1>Verify OTP</h1>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={handleChange}
        />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
};

export default OtpVerification;
