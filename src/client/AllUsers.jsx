import React, { useEffect } from "react";
import { getUsersThunk } from "./store/users";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function AllUsers() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.allUsers);
  console.log("users", users);

  useEffect(() => {
    dispatch(getUsersThunk());
  }, []);

  return (
    <div>
      <h1>AllUsers</h1>
      {users.length > 0 &&
        users.map((user) => (
          <div key={user.id}>
            <Link to={`/users/${user.id}`}>
              <h2>Username: {user.username}</h2>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default AllUsers;
