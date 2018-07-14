// react redux's connect function
import { connect } from "react-redux";

// import in the Home component
import Home from "../screens/Home";

import { postLogoutUser } from "../data/actions/api";

const mapStateToProps = state => {
  return {
    user: state.user,
    loggedIn: state.loggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: (email) => dispatch(postLogoutUser(email)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);
