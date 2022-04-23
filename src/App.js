import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <Router>
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
          {/* "Switch" replaced by routes "Routes" and updated the Route declaration in React Dom Router V6 */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="users" element={<Users />}>
              <Route path=":id" element={<User />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
