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
  const [name, setName] = useState("Guest User");

  const pack = { name, text };

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
      .post(`${API_URL}/feedback`, pack)
      .then(() => {
        setText("");
        getFeedback();
        setName();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div style={{ height: "665px" }}>
      <ChakraProvider>
        <Box p={4}>
          <Navbar />
          <VStack spacing={4} align="center" mt={8}>
            <Heading as="h2" size="xl" color="teal.500">
              Provide Your Feedback
            </Heading>
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <FormControl>
                {/* <FormLabel fontWeight="bold">Feedback:</FormLabel> */}
                <textarea
                  style={{
                    border: "1px solid",
                    borderRadius: "5px",
                    minHeight: "150px",
                    minWidth: "600px",
                    overflow: "hidden",
                    resize: "both",
                  }}
                  required
                  value={text}
                  type="text"
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Insert your feedback"
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
                boxShadow="md"
                textAlign="left"
              >
                <Text fontWeight="bold">{element.name}</Text>
                <Text>{element.text}</Text>
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
            <Button display={"flex"} colorScheme="teal" alignItems={"center"}>
              <ChakraLink as={Link} to="/countries" fontWeight="bold">
                Back to Countries
              </ChakraLink>
            </Button>
          </VStack>
        </Box>
      </ChakraProvider>
    </div>
  );
}

export default FeedBack;
