import React, { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./NavBar";

const API_URL = "https://backendcountries-qarw.onrender.com";

function FeedBack() {
  const [feedback, setFeedback] = useState([]);
  const { id } = useParams();
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [postId, setPostID] = useState("");

  const feedbacks = { name, text, postId };

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
    const firstSubmit = setText("");

    axios
      .post(`${API_URL}/feedback`, feedbacks)
      .then((response) => {
        firstSubmit;
        getFeedback();
      })
      .catch((error) => console.log(error));
  };

  return (
    <ChakraProvider>
      <div style={{ height: "665px" }}>
        <Navbar />
        <form onSubmit={handleSubmit}>
          <label>
            FeedBack:{" "}
            <input
              required
              value={text}
              type="text"
              onChange={(e) => setText(e.target.value)}
              placeholder="Insert your feedback"
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        {feedback.map((element) => (
          <article key={element.id}>
            <h3>{element.name}</h3>
            <p>{element.text}</p>
            <button onClick={() => deleteFeedback(element.id)}>X</button>
          </article>
        ))}
        <Link to="/countries"> Back </Link>
      </div>
    </ChakraProvider>
  );
}

export default FeedBack;
