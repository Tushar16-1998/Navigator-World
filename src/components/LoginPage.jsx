import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";
import LoginForm from "./LoginForm";
import usersData from "../data/users.json";
import { Link, Navigate } from "react-router-dom";


const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    const user = usersData.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setLoggedIn(true);
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  const handleGuestAccess = () => {
    const guestUser = usersData.find((user) => user.username === "guest");

    if (guestUser) {
      setUsername(guestUser.username);
      setPassword(guestUser.password);
      setLoggedIn(true);
    } else {
      alert("Guest user not found in the user data.");
    }
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <Navigate to={`/countries`} />
        </div>
      ) : (
        <LoginForm
          setUsername={setUsername}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleGuestAccess={handleGuestAccess}
        >
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={handleGuestAccess}
          >
            Guest Access
          </Button>
          <Button variant="solid" colorScheme="blue" onClick={handleLogin}>
            Login
          </Button>
        </LoginForm>
      )}
    </div>
  );
};

export default LoginPage;
