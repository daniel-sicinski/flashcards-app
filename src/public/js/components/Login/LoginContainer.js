import { connect } from "react-redux";
import Login from "./Login";
import {
  loginRequestStart,
  dismissAuthError
} from "../../store/actions/authActions";

const mapStateToProps = state => {
  return {
    requestingLogin: state.auth.loading,
    loginError: state.auth.error
  };
};

export default connect(mapStateToProps, {
  loginRequestStart,
  dismissAuthError
})(Login);
