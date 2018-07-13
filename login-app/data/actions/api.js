import axios from "../axios";

export const postUser = (email, password) => dispatch => {
  axios.post("/register", {
    email: email,
    password: password
  }).then(({ data }) => {
    console.log(data)
  });
};
