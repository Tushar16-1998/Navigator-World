import React from 'react';
import { Link } from 'react-router-dom';
import { VStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";


const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4} spacing={4} align="flex-end">
      <IconButton
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        isRound
        size="lg"
        onClick={toggleColorMode}
      />
      <nav style={{ width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around" }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Home
          </Link>
          {/* <hr style={{ width: "100%", margin: 0 }} /> */}
          <Link to="/feedback" style={{ textDecoration: "none", color: "inherit" }}>
            Feedback
          </Link>
          <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
            About
          </Link>
      </nav>
    </VStack>
  );
};

export default Navbar;
