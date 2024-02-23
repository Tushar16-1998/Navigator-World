import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Input,
  Button,
  Select,
  Text,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import Article from "../components/Article";
import Navbar from "../components/NavBar";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const regions = [
    "Europe",
    "Asia",
    "Africa",
    "Oceania",
    "Americas",
    "Antarctic",
  ];

  useEffect(() => {
    document.title = `Showing All Countries`;
  }, []);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getCountries();
  }, []);

  async function searchCountry() {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${searchText}`
      );
      const data = await res.json();
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  async function filterByRegion(region) {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );
      const data = await res.json();
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  function handleSearchCountry(e) {
    e.preventDefault();
    searchCountry();
  }

  /*   function handleFilterByRegion(e) {
    e.preventDefault();
    filterByRegion();
  }
 */
  return (
    <>
      <Navbar />

      <Box margin="auto" padding="8" maxWidth="1200px">
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          gap={{ base: "4", md: "8" }}
          justify="space-between"
        >
          <form
            style={{
              padding: "16px",
              display: "flex",
              justifyContent: "space-between",
              width: "500px",
            }}
            onSubmit={handleSearchCountry}
            autoComplete="off"
          >
            <Input
              type="text"
              name="search"
              id="search"
              placeholder="Search for a country by its name"
              required
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              padding="4"
              w="380px"
              boxShadow="md"
              borderRadius="md"
              outline="none"
            />
            <Button
              type="submit"
              mt={{ base: "2", md: "0" }}
              colorScheme="teal"
              variant="solid"
              boxShadow="md"
              borderRadius="md"
              width="70px"
            >
              Search
            </Button>
          </form>

          <Select
            name="filter-by-region"
            id="filter-by-region"
            w="150px"
            m={4}
            outline="none"
            boxShadow="dark-lg"
            borderRadius="md"
            color="gray.600"
            value={regions.name}
            onChange={(e) => filterByRegion(e.target.value)}
          >
            {regions.map((region, index) => (
              <option key={index} value={region}>
                {region}
              </option>
            ))}
          </Select>
        </Flex>

        {isLoading ? (
          <Flex justify="center" align="center" height="60vh">
            <Spinner size="xl" />
          </Flex>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} gap="8">
            {countries.map((country) => (
              <Article key={country.name.common} {...country} />
            ))}
          </SimpleGrid>
        )}
      </Box>
    </>
  );
}
