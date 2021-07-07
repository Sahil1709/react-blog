import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const api = "https://blough-site.herokuapp.com/server";

  const handleSubmit = async (e) => {
    e.preventDefault();
    document.getElementById("error").innerHTML = "";
    setError(false);
    try {
      const res = await axios.post(api + "/auth/register", {
        username,
        email,
        password,
      });
      // res.data && window.location.replace("/login");
      res.data &&
        (document.getElementById("error").innerHTML =
          "Account created successfully");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div
      className="container"
      style={{
        marginTop: "100px",
        marginBottom: "300px",
        textAlign: "center",
      }}
    >
      <h2 className="text-center">Register Form</h2>
      <div className="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          blogsite.io/
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          @
        </span>
        <input
          type="email"
          class="form-control"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          #
        </span>
        <input
          type="password"
          className="form-control"
          placeholder="password"
          aria-label="Password"
          aria-describedby="basic-addon1"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button onClick={handleSubmit} variant="contained" color="primary">
        Sign UP
      </Button>
      <Typography>If you Already have an account , Log in ! </Typography>
      <Button href="/login" variant="contained">
        Login
      </Button>
      <br />
      {error && <div className="alert alert-danger">Something went wrong</div>}
      <div id="error" className="alert alert-success"></div>
    </div>
  );
}
