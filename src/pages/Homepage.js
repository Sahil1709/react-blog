import { React, useState, useEffect } from "react";
import MyCard from "../components/MyCard";
import axios from "axios";

export default function Homepage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    };
    fetchPosts();
  });
  return (
    <div className="container">
      <h1 className="text-center">Blogs</h1>
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {posts.map((p) => (
          <MyCard post={p} />
        ))}
      </div>
    </div>
  );
}
