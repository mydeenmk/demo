import React, { useEffect } from "react"
import MainRouter from "./MainRouter"
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import theme from './theme'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
// const AuthChecker = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = Cookies.get('token');
//     if (token) {
//       // Validate the token with the server
//       axios.post('http://localhost:3001/auth/validate-token', { token })
//         .then(response => {
//           if (response.data.valid) {
//             navigate('/home'); // Token is valid, navigate to home
//           } else {
//             Cookies.remove('token'); // Remove invalid token
//             navigate('/'); // Redirect to login page
//           }
//         })
//         .catch(error => {
//           console.error('Error validating token:', error);
//           Cookies.remove('token'); // Remove token on error
//           navigate('/'); // Redirect to login page
//         });
//     } else {
//       navigate('/'); // Redirect to login page if no token
//     }
//   }, [navigate]);

//   return null; // This component does not render anything
// };


function App() {
  
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
      
        <MainRouter />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App