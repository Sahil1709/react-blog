import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton, Input, Button } from "@material-ui/core";
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { Context } from "../context/Context";
import SaveIcon from "@material-ui/icons/Save";
import axios from "axios";

function ViewBlog() {
  const location = useLocation();
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const id = location.pathname.split("/")[2];
  const PF = "http://localhost:5000/images/";
  const [post, setPost] = useState([]);
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + id);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
      // window.location.reload();
    } catch (err) {}
  };
  return (
    <div className="container">
      <h2>
        Title :{" "}
        {updateMode ? (
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        ) : (
          <span>{post.title}</span>
        )}
      </h2>
      <img width="100%" height="100%" src={PF + post.photo} alt="" />
      <div>
        Tags :
        {post.categories &&
          post.categories.map((c) => (
            <span style={{ margin: "0 10px", color: "blue" }}>{c}</span>
          ))}
      </div>
      <div className="flex">
        {post.username ? (
          <h3>
            Author :{" "}
            <Link
              style={{ textDecoration: "none" }}
              to={`/?user=${post.username}`}
            >
              {post.username}
            </Link>
          </h3>
        ) : (
          <div class="alert alert-danger" role="alert">
            This post doesn't have an author
          </div>
        )}

        <div className="float-end">
          <div>Created At : {new Date(post.createdAt).toDateString()}</div>
          <div>Updated At : {new Date(post.updatedAt).toDateString()}</div>
        </div>
      </div>
      <h5>
        Description :{" "}
        {updateMode ? (
          <input value={desc} onChange={(e) => setDesc(e.target.value)}></input>
        ) : (
          <span>{post.desc}</span>
        )}
      </h5>
      {post.username == user?.username && (
        <>
          <IconButton onClick={() => setUpdateMode(true)}>
            <EditIcon color="primary" />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <DeleteIcon color="secondary" />
          </IconButton>
        </>
      )}
      {updateMode && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdate}
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      )}
    </div>
  );
}

export default ViewBlog;
