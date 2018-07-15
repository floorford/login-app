const logUser = (state, { user }) => {
  return {
    ...state,
    user: user.email,
    loggedIn: user.logged_in,
  };
};

const userExists = (state, { error }) => {
  return {
    ...state,
    error: error
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "logUser": return logUser(state, action);
    case "userExists": return userExists(state, action);
    default: return state;
  }
};

export default reducer;
