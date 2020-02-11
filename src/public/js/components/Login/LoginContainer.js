import { connect } from "react-redux";
import Login from "./Login";
import { loginRequestStart } from "../../store/actions/authActions";

const mapStateToProps = state => {
  return {
    requestingLogin: state.auth.loading
  };
};

export default connect(mapStateToProps, {
  loginRequestStart
})(Login);
