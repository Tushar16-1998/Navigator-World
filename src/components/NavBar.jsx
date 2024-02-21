import React from 'react';
import { Link } from 'react-router-dom';
import { VStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";



const Navbar = () => {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4}>

      <IconButton
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        isRound="true"
        size="lg"
        alignSelf={"flex-end"}
        onClick={toggleColorMode}
      />
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Home
          </Link>
          <hr />
          <Link to="/feedback" >
            Feedback
          </Link>
        </div>
      </nav>
    </VStack>
  );
};

export default Navbar;
