import React from 'react';
import { Link, Button } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';

const LoginForm = ({ setUsername, setPassword, handleLogin, handleGuestAccess }) => {
  return (
    <Card>
      <CardHeader>Login</CardHeader>
      <CardBody>
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
          <Link to={"/GetInformation"}>
            <Button variant="solid" colorScheme='green' onClick={handleLogin}>
              Login
            </Button>
          </Link>
          
          <Link to={"/GetInformation"}>
            <Button variant="solid" colorScheme='green' onClick={handleGuestAccess}>
              Guest Access
            </Button>
          </Link>
        </form>
      </CardBody>
    </Card>
  );
};

export default LoginForm;