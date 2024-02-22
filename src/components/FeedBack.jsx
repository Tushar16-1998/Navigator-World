import React, { useState, useEffect } from "react";
import {
  ChakraProvider,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./NavBar";

const API_URL = "https://backendcountries-qarw.onrender.com";

function FeedBack() {
  const [feedback, setFeedback] = useState([]);
  const { id } = useParams();
  const [text, setText] = useState("");

  const getFeedback = () => {
    axios
      .get(`${API_URL}/feedback/`)
      .then((response) => setFeedback(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getFeedback();
  }, [id]);

  const deleteFeedback = (feedbackId) => {
    axios
      .delete(`${API_URL}/feedback/${feedbackId}`)
      .then(() => {
        setFeedback((prevFeedback) =>
          prevFeedback.filter((feedback) => feedback.id !== feedbackId)
        );
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/feedback`, { text })
      .then(() => {
        setText("");
        getFeedback();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div style={{height:"665px"}}>
    <ChakraProvider>
      <Box p={4}>
        <Navbar />
        <VStack spacing={4} align="center" mt={8}>
          <Heading as="h2" size="xl" color="teal.500">
            Provide Your Feedback
          </Heading>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <FormControl>
              <FormLabel>Feedback:</FormLabel>
              <Input
                required
                value={text}
                type="text"
                onChange={(e) => setText(e.target.value)}
                placeholder="Insert your feedback"
                bg="white"
              />
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg" mt={4}>
              Submit
            </Button>
          </form>
          {feedback.map((element) => (
            <Box
              key={element.id}
              borderWidth="1px"
              borderRadius="lg"
              p={4}
              w="100%"
              bg="white"
              boxShadow="md"
              textAlign="left"
            >
              <Text fontWeight="bold">{element.text}</Text>
              <Button
                onClick={() => deleteFeedback(element.id)}
                mt={2}
                colorScheme="red"
                size="sm"
              >
                Delete
              </Button>
            </Box>
          ))}
          <ChakraLink as={Link} to="/countries" mt={8} color="teal.500">
            Back to Countries
          </ChakraLink>
        </VStack>
      </Box>
    </ChakraProvider>
    </div>
  );
}

export default FeedBack;
