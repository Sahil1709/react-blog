import React from "react";
import { Button } from "@material-ui/core";
import { useState, useContext } from "react";
import { Context } from "../context/Context";
import axios from "axios";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/viewblog/" + res.data._id);
    } catch (err) {}
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
      <h1 className="text-center">Create a Blog</h1>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">
            Title
          </span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Anything You wish"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Description</span>
        </div>
        <textarea
          onChange={(e) => setDesc(e.target.value)}
          class="form-control"
          aria-label="With textarea"
        ></textarea>
      </div>
      <br />
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupFileAddon01">
            Upload Image
          </span>
        </div>
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="default" component="span">
            <input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            Upload
          </Button>
        </label>
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupFileAddon01">
            Preview Image
          </span>
          {file && (
            <img
              width="100%"
              height="100%"
              className="writeImg"
              src={URL.createObjectURL(file)}
              alt=""
            />
          )}
        </div>
      </div>
      <div className="text-center">
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Publish
        </Button>
      </div>
    </div>
  );
}

export default CreateBlog;
