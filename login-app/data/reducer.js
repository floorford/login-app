const loginUser = (state, { user }) => {
  return {
    ...state,
    user: user.email,
    loggedIn: user.logged_in,
  };
};

const logoutUser = (state, { player }) => {
  return {
    ...state,
    user: email,
    loggedIn: logged_in,
  };
};


const reducer = (state, action) => {
  switch (action.type) {
    case "loginUser": return loginUser(state, action);
    case "logoutUser": return logoutUser(state, action);
    default: return state;
  }
};

export default reducer;
