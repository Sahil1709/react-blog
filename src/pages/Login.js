import React from "react";
import { Button, Typography } from "@material-ui/core";
import { useRef, useContext } from "react";
import { Context } from "../context/Context";
import axios from "axios";

export default function Login() {
  const userRef = useRef();
  const passRef = useRef();
  const { user, dispatch, isfetching } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  console.log(user);
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
          ref={userRef}
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
          ref={passRef}
        />
      </div>
      <Button
        disabled={isfetching}
        onClick={handleSubmit}
        variant="contained"
        color="primary"
      >
        Login
      </Button>
      <Typography>If you dont have an account , Create one ! </Typography>
      <Button href="/register" variant="contained">
        Signup
      </Button>
    </div>
  );
}
