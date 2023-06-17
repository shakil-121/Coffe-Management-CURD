import React from "react";
import './Header.css' 
import logo from '../../assets/more/logo1.png'

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="text flex justify-center items-center pt-2">
          <img src={logo} style={{height:'50px',width:'50px'}} alt="" />
          <h1 className="text-white text-2xl">Coffee Management System</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
