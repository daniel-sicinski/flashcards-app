import { connect } from "react-redux";
import { logoutRequestStart } from "../../store/actions/authActions";
import UserPanelView from "./UserPanelView";

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps, { logoutRequestStart })(UserPanelView);
