import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Comments from "../components/Comments";
import Navbar from '../components/NavBar';
import { Box, Image, Heading, Text, Link as ChakraLink, VStack, HStack, List, ListItem } from '@chakra-ui/react';

export default function SingleCountry() {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const getSingleCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        setCountry(data);
      } catch (error) {
        console.error(error);
      }
    };

    getSingleCountry();
  }, [name]);

  useEffect(() => {
    document.title = `Countries | ${name}`;
  }, [name]);

  return (
    <>
    <div style={{height: "665px"}}>
      <Navbar />

      <Box p={8} maxW="7xl" mx="auto">
        {country.map((item) => (
          <HStack key={item.population} spacing={8} justify="center" align="center">
            <Box>
              <Image src={item.flags.svg} alt={item.name.common} boxSize="200px" rounded="md" shadow="lg" />
            </Box>

            <VStack align="start" spacing={4}>
              <Heading fontWeight="bold" fontSize={{ base: '2xl', lg: '4xl' }} color="gray.900">
                {item.name.official}
              </Heading>

              <List spacing={2} color="slate.700">
                <ListItem>Capital: {item.capital[0]}</ListItem>
                <ListItem>Population: {item.population.toLocaleString()}</ListItem>
                <ListItem>Region: {item.region}</ListItem>
                <ListItem>Subregion: {item.subregion}</ListItem>
              </List>

              {item.borders && (
                <>
                  <Heading mt={4} mb={2} fontWeight="bold" fontSize="lg" color="gray.900">
                    Borders:
                  </Heading>
                  <HStack spacing={2}>
                    {item.borders.map((border, index) => (
                      <Box
                        key={index}
                        p={2}
                        rounded="md"
                        fontSize="xs"
                        fontWeight="bold"
                        bg="white"
                        shadow="md"
                        color="gray.700"
                      >
                        {border}
                      </Box>
                    ))}
                  </HStack>
                </>
              )}

              <ChakraLink
                as={Link}
                to="/countries"
                mt={8}
                bg="blue.500"
                py={3}
                px={6}
                rounded="md"
                shadow="md"
                color="white"
                _hover={{ bg: 'blue.600' }}
              >
                &larr; Back
              </ChakraLink>
            </VStack>

            <Box>
              <Comments />
            </Box>
          </HStack>
        ))}
      </Box>
    </div>
    </>
  );
}
