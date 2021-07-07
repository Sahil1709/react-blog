import { React, useState, useEffect } from "react";
import MyCard from "../components/MyCard";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";

export default function Homepage() {
  const { search } = useLocation();
  const [posts, setPosts] = useState([]);
  const [cats, setCats] = useState([]);
  const api = "https://blough-site.herokuapp.com/server/";
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get(api + "/categories" + search);
      setCats(res.data);
    };
    getCats();
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(api + "/posts" + search);
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
          {posts.length > 0 ? (
            posts.map((p) => <MyCard post={p} />)
          ) : (
            <div
              style={{ marginTop: "100px", marginBottom: "300px" }}
              className="alert alert-danger text-center"
            >
              No posts to display
            </div>
          )}
        </div>
      </div>
    </>
  );
}
