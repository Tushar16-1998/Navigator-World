import React from 'react';
import { Link } from 'react-router-dom';
import {Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,} from '@chakra-ui/react'

const LoginForm = ({ setUsername, setPassword, handleLogin, handleGuestAccess }) => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          Username:
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        <Link to='/GetInformation'>
          <button type="button" onClick={handleGuestAccess}>
            Guest Access
          </button>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;