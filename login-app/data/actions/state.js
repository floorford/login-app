export const loginUser = (user) => {
  return {
    type: "loginUser",
    user: user
  };
};

export const logoutUser = (user) => {
  return {
    type: "loginUser",
    user: user
  };
};

export const errorLog = (error) => {
  return {
    type: "errorLog",
    error: error
  };
};
