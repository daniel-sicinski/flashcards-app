import { connect } from "react-redux";
import Register from "./Register";
import {
  registerUserStart,
  dismissAuthError
} from "../../store/actions/authActions";

const mapStateToProps = state => {
  return {
    requestingRegistration: state.auth.loading,
    registrationError: state.auth.error
  };
};

export default connect(mapStateToProps, {
  registerUserStart,
  dismissAuthError
})(Register);
