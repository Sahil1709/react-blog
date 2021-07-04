import React from "react";
import { Button, Typography } from "@material-ui/core";

export default function Login() {
  return (
    <div
      className="container"
      style={{ marginTop: "100px", marginBottom: "300px", textAlign: "center" }}
    >
      <h2 className="text-center">Login Form</h2>
      <div className="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          @
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
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
        />
      </div>
      <Button variant="contained" color="primary">
        Login
      </Button>
      <Typography>If you dont have an account , Create one ! </Typography>
      <Button href="/register" variant="contained">
        Signup
      </Button>
    </div>
  );
}
