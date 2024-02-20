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
      .get(`${API_URL}/comments/${id}`)
      .then((response) => setComment(response.data))
      .catch((error) => console.error(error));
  }, []);

  const deleteComment = () => {
    axios.delete(`${API_URL}/comments/${id}`).then(() => {});
  };

  return (
    <div>
      {comment && (
        <article key={comment.postId}>
          {" "}
          <h3>{comment.name}</h3>
          <p>{comment.text}</p>
          <button>X</button>
        </article>
      )}
    </div>
  );
}
