import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const FriendForm = props => {
  const [friendVal, setFriendVal] = useState({
    id: "",
    name: "",
    age: "",
    email: ""
  });

  const handleChange = (e) => {
      setFriendVal({
          ...friendVal,
          [e.target.name]: e.target.value
      })
  }

  const addFriend = e => {
      e.preventDefault();

        
  }

  return (
    <div>
      <form onSubmit={addFriend}>
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          type="text"
          placeholder="Friends name"
          onChange={handleChange}
          value={friendVal.name}
        />
        <label htmlFor="age">age:</label>
        <input
          name="age"
          type="text"
          placeholder="Friends age"
          onChange={handleChange}
          value={friendVal.age}
        />
        <label htmlFor="email">email: for some reason</label>
        <input
          name="email"
          type="text"
          placeholder="Friends email"
          onChange={handleChange}
          value={friendVal.email}
        />
      </form>
    </div>
  );
};
