// react redux's connect function
import { connect } from "react-redux";

// import in the Login component
import Login from "../screens/Login";

import { postLoginUser } from "../data/actions/api";

const mapStateToProps = state => {
  return {
    user: state.user,
    loggedIn: state.loggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (email, password) => dispatch(postLoginUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
