import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import './signup.css';import Card from '@material-ui/core/Card'
// import CardActions from '@material-ui/core/CardActions'
// import CardContent from '@material-ui/core/CardContent'
// import Button from '@material-ui/core/Button'
// import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
// import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({

 
  signupLink: {
      marginTop: theme.spacing(2),
      textAlign: 'center',
  },
}));
const Signup = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    mobileNumber: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/auth/register', formData);
      setMessage(response.data.message);
      if (response.data.message === 'otp has sent to your mail') {
        localStorage.setItem('userId', response.data.userId); // Store the user ID in localStorage
        navigate('/otp-verification');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <input
          type="text"
          name="userName"
          placeholder="Username"
          value={formData.userName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="mobileNumber"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
       <p>Already have an account ?</p>
       
      </form>
    </div>
  );
};

export default Signup;
