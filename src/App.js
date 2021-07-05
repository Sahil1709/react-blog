import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ViewBlog from "./pages/ViewBlog";
import CreateBlog from "./pages/CreateBlog";
import Account from "./pages/Account";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/posts">
            <Homepage />
          </Route>
          <Route path="/viewblog">
            <ViewBlog />
          </Route>
          <Route path="/create-blog">
            <CreateBlog />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
