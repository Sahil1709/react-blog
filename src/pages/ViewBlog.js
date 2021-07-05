import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ViewBlog() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [post, setPost] = useState([]);
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + id);
      setPost(res.data);
    };
    getPost();
  }, [id]);
  return (
    <div className="container">
      <h2>Title : {post.title}</h2>
      <img src={post.image} alt="" />
      <div>
        Tags :
        {post.categories &&
          post.categories.map((c) => (
            <span style={{ margin: "0 10px", color: "blue" }}>{c}</span>
          ))}
      </div>
      <div className="flex">
        <h3>Created By : {post.username}</h3>
        <div className="float-end">
          <div>Created At : {new Date(post.createdAt).toDateString()}</div>
          <div>Updated At : {new Date(post.updatedAt).toDateString()}</div>
        </div>
      </div>
      <h5>Description : {post.desc}</h5>
      <IconButton>
        <EditIcon color="primary" />
      </IconButton>
      <IconButton>
        <DeleteIcon color="secondary" />
      </IconButton>
    </div>
  );
}

export default ViewBlog;
