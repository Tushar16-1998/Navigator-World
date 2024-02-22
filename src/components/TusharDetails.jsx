import React from 'react';
import Navbar from './NavBar';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import {
  Box,
  Image,
  IconButton,
  Text,
  Link as ChakraLink,
  VStack,
  HStack,
  List,
  ListItem,
  Flex,
} from "@chakra-ui/react";

function TusharDetails() {
  return (
    <div>
      <Navbar />
      <Box
        p={5}
        border={"5px solid"}
        boxShadow={"dark-lg"}
        borderColor={"silver"}
        rounded={"md"}
        alignContent={"space-around"}>

        <Flex direction={"column"} align="center" mt={8}>
          <HStack spacing={8} mb={8}>
            <Image
              src={"https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png"}
              alt={"IndianFlag"}
              boxSize={"200px"}
              rounded={"full"}
            />

            <VStack align="start">
              <List
                display={"flex"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                spacing={2}
                color="slate.700">
                <ListItem>
                  <Text>
                    <strong>Name:</strong> Tushar Sunder
                  </Text>
                </ListItem>
                <ListItem>
                  <Text>
                    <strong>Age:</strong> 26
                  </Text>
                </ListItem>
                <ListItem>
                  <Text>
                    <strong>Gender:</strong> Male
                  </Text>
                </ListItem>
                <ListItem>
                  <Text>
                    <strong>Occupation:</strong> Junior Full Stack Web Developer
                  </Text>
                </ListItem>
                <ListItem>
                  <Text>
                    <strong>Location:</strong> Portugal
                  </Text>
                </ListItem>

                <Box 
                style={{ 
                  display:"flex", 
                  flexDirection: "coloum",
                  alignContent: "space-between"
                  }}>
                <ListItem>
                  <ChakraLink href="mailto:tusharsunder2@@gmail.com">
                    <Image
                      rounded={"full"}
                      src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white target=" />
                  </ChakraLink>
                </ListItem>
                  
                <ListItem>
                  <ChakraLink href="https://github.com/Tushar16-1998">
                    <IconButton
                      icon={<FaGithub />}
                      width={"50px"}
                      height={"30px"}
                      ml={"10px"}
                      mr={"10px"}
                      size="md" />
                  </ChakraLink>
                </ListItem>

                <ListItem>
                  <ChakraLink href="https://www.linkedin.com/in/tushar-sunder-628690295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <Image 
                    rounded={"full"}
                    src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
                  </ChakraLink>
                </ListItem>
                </Box>
                
                <ListItem textAlign="center">
                  <Text><strong>Partner's info:</strong>{" "}
                  <ChakraLink as={Link} to='/mateus' color="teal.500" fontWeight="bold" _hover={{ textDecor: 'underline', color: 'teal.600' }}>
                    Mateus Lima
                  </ChakraLink>
                  </Text>
                </ListItem>
              </List>
            </VStack>
          </HStack>
        </Flex>
      </Box>
    </div>
  );
}

export default TusharDetails;
