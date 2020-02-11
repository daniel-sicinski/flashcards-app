import { connect } from "react-redux";
import Register from "./Register";
import { registerUserStart } from "../../store/actions/authActions";

const mapStateToProps = state => {
  return {
    requestingRegistration: state.auth.loading
  };
};

export default connect(mapStateToProps, {
  registerUserStart
})(Register);
