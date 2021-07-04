import React from "react";
import { Button, Typography } from "@material-ui/core";

export default function Register() {
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
        Sign UP
      </Button>
      <Typography>If you Already have an account , Log in ! </Typography>
      <Button href="/login" variant="contained">
        Login
      </Button>
    </div>
  );
}
