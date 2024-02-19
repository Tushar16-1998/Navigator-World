import React, { useState } from 'react';
import LoginForm from './LoginForm';
import usersData from '../data/users.json'
import { Link } from'react-router-dom';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    const user = usersData.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setLoggedIn(true);
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  const handleGuestAccess = () => {
    const guestUser = usersData.find((user) => user.username === 'guest');

    if (guestUser){ 
        setUsername(guestUser.username);
        setPassword(guestUser.password);
        setLoggedIn(true);
    } else {
      alert('Guest user not found in the user data.');
    }
  };

  return (
    <div>
        
        {loggedIn ? (
            <div>
                <Link to='/GetInformation' />
            <h1>Welcome, {username}!</h1>
            <p><Text
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text'
                fontSize='6xl'
                fontWeight='extrabold'>
                    You are now logged in.</Text></p>
            </div>
        ) : (
            
            <LoginForm 
            setUsername={setUsername}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleGuestAccess={handleGuestAccess}
            />
            
            )}
    </div>
  );
};

export default LoginPage;
