import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Photos/Logo.png';
import InterLink from '../Photos/ONKVWY0 copy.png';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className='wrapper'>
      <img src={InterLink} alt="InterLink" className="InterLink" />
      <div className='InputContent'>
        <img src={Logo} alt="Logo" className="logo" />
        <input className='Email' type='text' placeholder='Email' required />
        <input className='Password' type='password' placeholder='Password' required />
        <button className='LogInBtn'>SignUp</button>
        <NavLink to="/login" className="createAccount">Already SignedUp?</NavLink>
      </div>
    </div>
  );
};

export default SignUp;
