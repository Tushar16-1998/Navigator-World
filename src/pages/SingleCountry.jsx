import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Comments from "../components/Comments";
import Navbar from "../components/NavBar";
import {
  Box,
  Image,
  Heading,
  Text,
  Link as ChakraLink,
  VStack,
  HStack,
  List,
  ListItem,
  Flex,
} from "@chakra-ui/react";

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
      <Flex direction={"column"} style={{ height: "665px" }}>
        <Navbar />

        <Box p={8} maxW="7xl" mx="auto">
          {country.map((item) => (
            <HStack
              key={item.population}
              spacing={8}
              justify="space-around"
              align="center"
            >
              <Image
                src={item.flags.svg}
                alt={item.name.common}
                boxSize="450px"
                rounded="md"
              />

              <VStack align="start" spacing={4}>
                <Heading
                  fontWeight="bold"
                  fontSize={{ base: "2xl", lg: "4xl" }}
                >
                  {item.name.official}
                </Heading>

                <List
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  spacing={2}
                  color="slate.700"
                >
                  <ListItem>
                    <strong>Capital:</strong> {item.capital[0]}
                  </ListItem>
                  <ListItem>
                    <strong>Population:</strong>{" "}
                    {item.population.toLocaleString()}
                  </ListItem>
                  <ListItem>
                    <strong>Region:</strong> {item.region}
                  </ListItem>
                  <ListItem>
                    <strong>Subregion:</strong> {item.subregion}
                  </ListItem>
                </List>

                {item.borders && (
                  <>
                    <Heading mt={4} mb={2} fontWeight="bold" fontSize="lg">
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
                          shadow="dark-lg"
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
                  bg="teal"
                  py={3}
                  px={6}
                  rounded="md"
                  shadow="dark-lg"
                  color="white"
                >
                  &larr; Back
                </ChakraLink>
              </VStack>
            </HStack>
          ))}
          <Flex m={"30px"}>
            <Comments />
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
