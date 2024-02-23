import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <h1>Sorry didn't find your request!!</h1>
      <h2>
        <Link style={{ textDecoration: "none" }} to={"/countries"}>
          Click here to go back!!!
        </Link>
      </h2>
    </div>
  );
}
