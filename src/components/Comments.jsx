import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  ChakraProvider,
  Text,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const API_URL = "https://backendcountries-qarw.onrender.com";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const [name, setName] = useState("Guest User");
  const [text, setText] = useState("");
  const [postId, setPostID] = useState("");

  const comment = { name, text, postId };

  const getComments = () => {
    axios
      .get(`${API_URL}/comments/`)
      .then((response) => setComments(response.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getComments();
  }, [id]);

  const deleteComment = (commentId) => {
    axios
      .delete(`${API_URL}/comments/${commentId}`)
      .then(() => {
        // Update state or perform any additional actions after deletion
        setComments((prevComments) =>
          prevComments.filter((comment) => comment.id !== commentId)
        );
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstSubmit = setText("");

    axios
      .post(`${API_URL}/comments`, comment)
      .then((response) => {
        firstSubmit;
        // After submitting a new comment, fetch the updated comments
        getComments();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Flex direction={"column"}>
      <ChakraProvider>
        <form onSubmit={handleSubmit}>
          <FormControl display={"flex"}>
            <FormLabel fontWeight="bold" alignSelf={"flex-start"}>
              Comment:{" "}
            </FormLabel>
            <textarea
              style={{
                border: "1px solid",
                borderRadius: "5px",
                minHeight: "100px",
                minWidth: "400px",
                overflow: "hidden",
                resize: "both",
              }}
              required
              value={text}
              type="text"
              onChange={(e) => setText(e.target.value)}
              placeholder="Insert your comment"
            />
            <Button colorScheme="teal" type="submit">
              Submit
            </Button>
          </FormControl>
        </form>
        {comments.map((comment) => (
          <Flex
            borderWidth="1px"
            borderRadius="lg"
            margin={"10px"}
            p={4}
            w="100%"
            boxShadow="dark-lg"
            textAlign="left"
            key={comment.id}
            direction={"column"}
          >
            <Flex justify={"space-between"}>
              <Text fontWeight="bold">{comment.name}</Text>
              <Button
                onClick={() => deleteComment(comment.id)}
                mt={2}
                colorScheme="red"
                size="sm"
                alignSelf={"end"}
              >
                X
              </Button>
            </Flex>

            <p>{comment.text}</p>
          </Flex>
        ))}
      </ChakraProvider>
    </Flex>
  );
}
