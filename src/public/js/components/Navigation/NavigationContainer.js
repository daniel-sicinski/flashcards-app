import { connect } from "react-redux";
import Navigation from "./Navigation";

const mapStateToProps = state => {
  return {
    isDesktop: state.ui.isDesktop
  };
};

export default connect(mapStateToProps)(Navigation);
