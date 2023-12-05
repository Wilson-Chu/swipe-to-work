import React from 'react';
import './Login.scss';
import '../Preferences/buttons.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginButton from './LoginButton';

function Login(props) {

  return (
    <>
      <LoginButton />
    </>
  );
}

export default Login;