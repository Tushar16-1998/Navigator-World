import React from "react";
import { Link } from "react-router-dom";
import { Box, Image, Heading, Text, List, ListItem } from "@chakra-ui/react";

export default function Article({
  flags,
  name,
  population,
  region,
  subregion,
}) {
  return (
    <>
      <Link to={`/${name.common}`}>
        <Box
          className="soli"
          transition="all 0.2s"
          rounded="lg"
          shadow="dark-lg"
          overflow="hidden"
        >
          <Image
            src={flags.svg}
            alt=""
            height="72"
            width="full"
            objectFit="cover"
          />
          <Box p="4">
            <Heading as="h2" fontSize="lg" fontWeight="bold" mb="2">
              {name.common}
            </Heading>
            <List spacing={2} mt="2">
              {/*               <ListItem>Population: {population.toLocaleString()}</ListItem> */}
              <ListItem>Region: {region}</ListItem>
              {/* <ListItem>Subregion: {subregion}</ListItem> */}
            </List>
          </Box>
        </Box>
      </Link>
    </>
  );
}
