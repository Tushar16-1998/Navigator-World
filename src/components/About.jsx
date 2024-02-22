import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, Text, List, ListItem, Link as ChakraLink } from '@chakra-ui/react';
import Navbar from './NavBar';

function About() {
  return (
      <Box
        p={8}
        maxW="800px"
        mx="auto"
        borderRadius="xl"
        boxShadow="dark-lg"
        border="5px solid #E2E8F0"
        shadow="dark-lg"
        alignContent={"space-between"}
        justifyItems={"center"}>
        <Navbar />

        <Heading as="h1" fontSize="4xl" mb={4} textAlign="center" color="teal.500">
          About Us
        </Heading>
        <Text fontSize="lg" textAlign="center" mb={6} >
          <strong>Welcome to our extraordinary Application! Explore our story and get to know us better.</strong>
        </Text>

        <Heading as="h3" fontSize="2xl" mb={4} textAlign="center" color="teal.500">
          Meet Our Team
        </Heading>
        <List pl={0}>
          <ListItem mb={4} textAlign="center">
            <ChakraLink
              as={Link}
              to='/tushar'
              color="teal"
              fontWeight="bold"
              _hover={{ textDecor: 'underline', color: 'teal.600' }}>
              Tushar Sunder
            </ChakraLink>
          </ListItem>
          <ListItem textAlign="center">
            <ChakraLink as={Link} to='/mateus' color="teal.500" fontWeight="bold" _hover={{ textDecor: 'underline', color: 'teal.600' }}>
              Mateus Lima
            </ChakraLink>
          </ListItem>
        </List>

        <ChakraLink
          display={"flex"}
          to='/countries'
          mt={3}
          marginRight={230}
          marginLeft={230}
          color="white"
          justifyContent={"center"}
          alignItems={"center"}
          bg="teal"
          rounded={"md"}>
          Back to Countries
        </ChakraLink>
      </Box>
  );
}

export default About;
