// react redux's connect function
import { connect } from "react-redux";

// import in the Register component
import Register from "../screens/Register";

import { postUser } from "../data/actions/api";

const mapStateToProps = state => {
  return {
    error: state.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (email, password) => dispatch(postUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
