import React from "react";
import Counter from "./components/reactRedux/Counter";

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import Home from "./components/reactRouter/Home";
// import About from "./components/reactRouter/About";
// import Users from "./components/reactRouter/Users";
// import User from "./components/reactRouter/User";

function App() {
  return (
    <div className="App">

      {/* REACT-ROUTER */}
      {/* <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
          <hr />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="users" element={<Users />}>
              <Route path=":id" element={<User />} />
            </Route>
          </Routes>
        </div>
      </Router> */}

      <Counter />
    </div>
  );
}

export default App;
