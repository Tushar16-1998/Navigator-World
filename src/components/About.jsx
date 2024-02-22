import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, Text, List, ListItem, Link as ChakraLink } from '@chakra-ui/react';
import Navbar from './NavBar';

function About() {
  return (
    <Box p={8} maxW="800px" mx="auto" borderRadius="xl"  boxShadow="dark-lg" border="1px solid #E2E8F0" shadow="dark-lg">
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
          color="teal.500" 
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

      <Link to='/countries' display="block" mt={8} color="teal.500" fontSize="lg" fontWeight="bold" textAlign="center" _hover={{ textDecor: 'underline', color: 'teal.600' }}>
        Back to Countries
      </Link>
    </Box>
  );
}

export default About;
