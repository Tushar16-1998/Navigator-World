import React from "react";
import { Link, Button } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, Flex } from "@chakra-ui/react";

const LoginForm = ({
  setUsername,
  setPassword,
  handleLogin,
  handleGuestAccess,
}) => {
  return (
    <Card border="1px solid">
      <CardHeader fontWeight="bold">Login</CardHeader>
      <CardBody>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ margin: "5px" }}>
            <strong>Username: </strong>
            <input
              style={{ border: "1px solid", borderRadius: "10px" }}
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label style={{ margin: "5px" }}>
            <strong>Password: </strong>
            <input
              style={{ border: "1px solid", borderRadius: "10px" }}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <Flex justifyContent="space-around" m={"10px"}>
            <Link to={"/countries"}>
              <Button variant="solid" colorScheme="green" onClick={handleLogin}>
                Login
              </Button>
            </Link>

            <Link to={"/countries"}>
              <Button
                variant="solid"
                colorScheme="green"
                onClick={handleGuestAccess}
              >
                Guest Access
              </Button>
            </Link>
          </Flex>
        </form>
      </CardBody>
    </Card>
  );
};

export default LoginForm;
