import axios from "axios";

const GET_USERS = "GET_USERS";
const GET_USER = "GET_USER";

const getUsers = (users) => ({
  type: GET_USERS,
  payload: users,
});

const getUser = (user) => ({
  type: GET_USER,
  payload: user,
});

export const getUsersThunk = () => async (dispatch) => {
  try {
    const { data: users } = await axios.get("/api/users");
    console.log("data", users);
    return dispatch(getUsers(users));
  } catch (error) {
    console.error(error);
  }
};

export const getUserThunk = (id) => async (dispatch) => {
  try {
    const { data: user } = await axios.get(`/api/users/${id}`);
    console.log("data", user);
    return dispatch(getUser(user));
  } catch (error) {
    console.error(error);
  }
};

const initialState = {
  allUsers: [],
  singleUser: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, allUsers: action.payload };
    case GET_USER:
      return { ...state, singleUser: action.payload };
    default:
      return state;
  }
}
