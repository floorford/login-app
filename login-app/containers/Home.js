// react redux's connect function
import { connect } from "react-redux";

// import in the Home component
import Home from "../screens/Home";

import { postLogoutUser } from "../data/actions/api";

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: (user) => dispatch(postLogoutUser(user)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);
