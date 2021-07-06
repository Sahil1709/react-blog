import React from "react";
import { Button, IconButton } from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { makeStyles } from "@material-ui/core/styles";
import { useContext, useState } from "react";
import { Context } from "../context/Context";
import axios from "axios";

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
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      document.getElementById("error").innerHTML = "Fields cannot be blank";
    } else {
      dispatch({ type: "UPDATE_START" });
      const updatedUser = {
        userId: user._id,
        username,
        email,
        password,
      };
      if (file) {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        updatedUser.profilePicture = filename;
        try {
          await axios.post("/upload", data);
        } catch (err) {}
      }
      try {
        const res = await axios.put("/user/" + user._id, updatedUser);
        setSuccess(true);
        document.getElementById("error").innerHTML = "";
        dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      } catch (err) {
        dispatch({ type: "UPDATE_FAILURE" });
      }
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
          src={file ? URL.createObjectURL(file) : PF + user.profilePicture}
          alt="Nothing to display"
        />
        <input
          accept="image/*"
          className={classes.input}
          id="icon-button-file"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
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
          placeholder={user.username}
          onChange={(e) => setUsername(e.target.value)}
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
          placeholder={user.email}
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="text-center">
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Update
        </Button>
      </div>
      {success && (
        <div className="alert alert-success">Account Updated Successfully</div>
      )}
      <div id="error" className="alert alert-danger"></div>
    </div>
  );
}

export default Account;
