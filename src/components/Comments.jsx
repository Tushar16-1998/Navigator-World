import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:3000";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const [name, setName] = useState("");
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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Comment:{" "}
          <input
            required
            value={text}
            type="text"
            onChange={(e) => setText(e.target.value)}
            placeholder="Insert your comment"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {comments.map((comment) => (
        <article key={comment.id}>
          <h3>{comment.name}</h3>
          <p>{comment.text}</p>
          <button onClick={() => deleteComment(comment.id)}>X</button>
        </article>
      ))}
    </div>
  );
}
