import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Photos/Logo.png';
import InterLink from '../Photos/ONKVWY0 copy.png';
import Envelope from '../Photos/envelope-solid (1).svg'
import Lock from '../Photos/lock-solid (1).svg'
import './LogIn.css';


const LogIn = () => {  

  return (

    <div className='wrapper'>
      <img src={InterLink} alt="InterLink" className="InterLink" />
      <div className='InputContent'>
        <img src={Logo} alt="Logo" className="logo" />
        <img src={Envelope} alt="Envelope" className="Envelope" />
        <input className='Email' type='text' placeholder='Email'maxLength={35} required />
        <img src={Lock} alt="Lock" className="Lock" />
        <input className='Password' type='password' placeholder='Password' maxLength={35} required />
        <button className='LogInBtn'>LogIn</button>
        <NavLink to="/signup" className="createAccount" >Create your account</NavLink>
      </div>
    </div>
  );
};

export default LogIn;
