import axios from "../axios";

import { logUser, userExists } from "./state.js";

export const postUser = (email, password) => dispatch => {
  axios.post("/register", {
    email: email,
    password: password
  }).then(({ data }) => {
    const error = data;
    dispatch(userExists(error));
  });
};

export const postLoginUser = (email, password) => dispatch => {
  axios.post("/login", {
    email: email,
    password: password
  }).then(({ data }) => {
    const user = data.data;
    dispatch(logUser(user));
  });
};

export const postLogoutUser = (user) => dispatch => {
  axios.post("/logout", {
    email: user,
  }).then(({ data }) => {
    const user = data.data;
    dispatch(logUser(user));
  });
};
