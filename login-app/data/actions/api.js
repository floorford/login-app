import axios from "../axios";

import { loginUser, logoutUser } from "./state.js";

export const postUser = (email, password) => dispatch => {
  axios.post("/register", {
    email: email,
    password: password
  }).then(({ data }) => {
    console.log(data.data)
  });
};

export const postLoginUser = (email, password) => dispatch => {
  axios.post("/login", {
    email: email,
    password: password
  }).then(({ data }) => {
    const user = data.data;
    dispatch(loginUser(user));
  });
};

export const postLogoutUser = (email) => dispatch => {
  axios.post("/logout", {
    email: email,
  }).then(({ data }) => {
    console.log(data)
  });
};
