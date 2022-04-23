import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const[user, setUser] = useState({});

  useEffect(() => {
      axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setUser(res.data))
  }, [])
  
  return <div>
      <h1> User : {user.name}</h1>
  </div>;
};

export default User;
