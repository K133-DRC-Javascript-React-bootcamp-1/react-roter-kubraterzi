import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {/* Link to içerisindeki adres bizim url de görmek isediğimiz adres, users içerisindeki adres ise api ya istek attığımız adres */}
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Users;