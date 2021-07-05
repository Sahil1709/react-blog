import React from "react";
import { Button, IconButton } from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { makeStyles } from "@material-ui/core/styles";
import { mergeClasses } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

function Account() {
  const classes = useStyles();
  return (
    <div
      className="container"
      style={{
        marginTop: "100px",
        marginBottom: "300px",
        textAlign: "center",
      }}
    >
      <h1>Update your account</h1>
      <div className="float-end">
        <Button variant="contained" color="secondary">
          Delete Account
        </Button>
      </div>
      <br />
      <div className="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          Profile picture
        </span>
        <img
          width="100px"
          height="100px"
          src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"
          alt="current"
        />
        <input
          accept="image/*"
          className={classes.input}
          id="icon-button-file"
          type="file"
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </label>
      </div>
      <div className="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          Username
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          value="Sahil"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          Email
        </span>
        <input
          type="email"
          class="form-control"
          placeholder="email"
          value="sahil@gmail.com"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          Password
        </span>
        <input
          type="password"
          class="form-control"
          placeholder="#########"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="text-center">
        <Button variant="contained" color="primary">
          Update
        </Button>
      </div>
    </div>
  );
}

export default Account;
