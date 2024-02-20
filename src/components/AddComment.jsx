import React from "react";
import axios from "axios";
import { useState } from "react";

const API_URL = "http://localhost:3000";
export default function AddComment() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [postId, setPostID] = useState("");

  const comment = { name, text, postId };

  function handleSubmit(e) {
    e.preventDefault();
  }

  axios
    .post(`${API_URL}/comments`, comment)
    .catch((error) => console.error(error));
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Text:{" "}
        <input
          style={{ width: "100px", height: "30px" }}
          value={text}
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Insert your comment"
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
