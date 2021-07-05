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
import { Context } from "./context/Context";
import { useContext } from "react";

function App() {
  const { user } = useContext(Context);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/create-blog">{user ? <CreateBlog /> : <Login />}</Route>
          <Route path="/register">{user ? <Homepage /> : <Register />}</Route>
          <Route path="/login">{user ? <Homepage /> : <Login />}</Route>
          <Route path="/account">{user ? <Account /> : <Login />}</Route>
          <Route path="/viewblog/:postId">
            <ViewBlog />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
