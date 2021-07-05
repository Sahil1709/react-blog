import React from "react";
import { Button } from "@material-ui/core";

function CreateBlog() {
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
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Description</span>
        </div>
        <textarea class="form-control" aria-label="With textarea"></textarea>
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
            />
            Upload
          </Button>
        </label>
      </div>
      <div className="text-center">
        <Button variant="contained" color="primary">
          Publish
        </Button>
      </div>
    </div>
  );
}

export default CreateBlog;
