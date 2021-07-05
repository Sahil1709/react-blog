import { React, useState, useEffect } from "react";
import MyCard from "../components/MyCard";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";

export default function Homepage() {
  const { search } = useLocation();
  const [posts, setPosts] = useState([]);
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories" + search);
      setCats(res.data);
    };
    getCats();
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  });
  return (
    <>
      <div className="float-end">
        <div>Categories</div>
        <ul style={{ listStyle: "none" }}>
          {cats.map((c) => (
            <li>
              <Link to={`?cat=${c.name}`}>{c.name}</Link>
            </li>
          ))}
        </ul>
      </div>
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
    </>
  );
}
