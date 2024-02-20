import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:3000";

export default function Comments() {
  const [comment, setComment] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/comments/`)
      .then((response) => setComment(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  const deleteComment = () => {
    axios.delete(`${API_URL}/comments/${id}`).then(() => {});
  };

  return (
    <div>
      {comment.map((text) => (
        <article key={comment.id}>
          <h3>{text.name}</h3>
          <p>{text.text}</p>
          <button onClick={deleteComment}>X</button>
        </article>
      ))}
    </div>
  );
}
