import React, { useEffect } from 'react';
import { Route, Routes,useLocation } from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import Signup from './Signup';
import Signin from './Signin';
import Profile from './Profile';
import Sidebar from './Sidebar';
import { PostProvider } from './PostContext';
import OtpVerification from './otpverify';
import Product from './Product';

const MainRouter = () => {
    const location = useLocation();
  const sidebarOptions = [
    { name: 'Home', path: '/Home' },
    { name: 'Product', path: '/Product' },
    { name: 'Settings', path: '/settings' },
    { name: 'Logout', path: '/', action: () => {}  }
  ];
  const showSidebar = !['/signup', '/', '/otp-verification'].includes(location.pathname);


  return (
    <PostProvider>
      <div>
      {showSidebar && <Sidebar options={sidebarOptions}  />}
        <div className={showSidebar ? 'content' : ''}>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/otp-verification" element={<OtpVerification />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Product" element={<Product/>} />
            <Route path="/users" element={<Users />} />
            <Route path="/user/:userId" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </PostProvider>
  );
};

export default MainRouter;
