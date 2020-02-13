import { connect } from "react-redux";
import FlashcardsView from "./FlashcardsView";

const mapStateToProps = state => {
  return {
    isDesktop: state.ui.isDesktop
  };
};

export default connect(mapStateToProps)(FlashcardsView);
