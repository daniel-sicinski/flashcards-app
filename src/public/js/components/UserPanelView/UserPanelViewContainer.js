import { connect } from "react-redux";
import { logoutRequestStart } from "../../store/actions/authActions";
import UserPanelView from "./UserPanelView";

const mapStateToProps = state => {
  return {
    userName: state.auth.userName
  };
};

export default connect(mapStateToProps, { logoutRequestStart })(UserPanelView);
