import React, { useEffect } from "react";
import { getUserThunk } from "./store/users";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

function SingleUser() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.singleUser);
  console.log("user", user);

  useEffect(() => {
    dispatch(getUserThunk(id));
  }, []);

  return (
    <div>
      <h2>SingleUser</h2>
      <Link to="/users">All Users</Link>
      <h2>Username: {user.username}</h2>
    </div>
  );
}

export default SingleUser;
