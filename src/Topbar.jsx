
// import React from 'react'
// import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core';
// import HomeIcon from '@material-ui/icons/Home'
// import { Link, useNavigate, useLocation } from 'react-router-dom'
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     appBar: {
//         backgroundColor: '#333', // Set background color here
//     },
//     button: {
//         color: '#fff',
//     },
//     active: {
//         color: '#ff4081',
//     },
// }));

// const isActive = (location, path) => {
//     return location.pathname === path ? 'active' : '';};

// function Menu() {
//     const classes = useStyles();
//     const location = useLocation();
//     const navigate = useNavigate();
//     const isAuthenticated = localStorage.getItem('jwt') ? true : false;

//     const signout = () => {
//         localStorage.removeItem('jwt');
//         navigate('/signin');
//     }

//     const userId = localStorage.getItem('userId');

//     return (
//         <AppBar position='static' style={{margin:0 }}>
//             <Toolbar >
//                 <Typography variant='h6' color='inherit'>
//                     Welcome
//                 </Typography>
//                 <Link to="/">
//                     <IconButton aria-label='Home' style={isActive(location, "/")}>
//                         <HomeIcon />
//                     </IconButton>
//                 </Link>
//                 <Link to="/users">
//                     <Button style={isActive(location, "/users")}>
//                         Users
//                     </Button>
//                 </Link>
//                 {!isAuthenticated && (
//                     <span>
//                         <Link to="/signup">
//                             <Button style={isActive(location, "/signup")}>Sign Up</Button>
//                         </Link>
//                         <Link to="/signin">
//                             <Button style={isActive(location, "/signin")}>Sign In</Button>
//                         </Link>
//                     </span>
//                 )}
//                 {isAuthenticated && (
//                     <span>
//                         <Link to={`/Profile/${userId}`}>
//                             <Button style={isActive(location, `/Profile/${userId}`)}>My Profile</Button>
//                         </Link>
//                         <Button color='inherit' onClick={signout}>Sign Out</Button>
//                     </span>
//                 )}
//             </Toolbar>
//         </AppBar>
//     )
// }

// export default Menu
