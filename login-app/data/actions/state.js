export const logUser = (user) => {
  return {
    type: "logUser",
    user: user
  };
};

export const userExists = (error) => {
  return {
    type: "userExists",
    error: error
  };
};
