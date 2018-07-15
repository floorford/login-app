const logUser = (state, { user }) => {
  return {
    ...state,
    user: user.email,
    loggedIn: user.logged_in,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "logUser": return logUser(state, action);
    default: return state;
  }
};

export default reducer;
