import React, { useState, useEffect } from "react";
import { Button, Text } from "@chakra-ui/react";
import LoginForm from "./LoginForm";
import { Link, Navigate } from "react-router-dom";
import { VStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import usersData from "../data/users.json";
import axios from "axios";

const API_URL = "https://backendcountries-qarw.onrender.com";

const LoginPage = () => {
  const [profile, setProfile] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    axios.get(`${API_URL}/profile`).then((response) => {
      setUsername(response.data.username);
      setPassword(response.data.password);
      setProfile(response.data);
    });
  }, []);

  const handleLogin = () => {
    const user = profile.find(
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

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div style={{ height: "605px" }}>
      <VStack p={4}>
        <IconButton
          icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
          isRound="true"
          size="lg"
          alignSelf={"flex-end"}
          onClick={toggleColorMode}
        />
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
      </VStack>
    </div>
  );
};

export default LoginPage;
