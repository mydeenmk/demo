import React from 'react';
import { NavLink , useNavigate  } from 'react-router-dom';
import  "./Sidebar.css"
import { FaLeaf } from 'react-icons/fa';
import Cookies from 'js-cookie';
const Sidebar = ({ options }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear cookies and localStorage
    Cookies.remove('token'); // or Cookies.remove('authToken') based on your key
    localStorage.removeItem('userId'); // Remove any other relevant data
    navigate('/'); // Redirect to Signin page or home page
  };
  return (
    <div className="sidebar">
      <h3 style={{color:'#4caf50'}}><FaLeaf style={{ marginRight: '8px', }} />GREEN MARKET</h3>
      <ul >
        {options.map((option, index) => (
          <li key={index} >
            {option.action ? (
              <button onClick={handleLogout}>
              {option.name}
            </button>
            ) : (
              <NavLink to={option.path} exact activeClassName="active">
                {option.name}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
