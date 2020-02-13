import { connect } from "react-redux";
import FlashcardsToolbar from "./FlashcardsToolbar";
import { invertSlides } from "../../store/actions/UIActions";

const mapStateToProps = state => {
  return {
    isDesktop: state.ui.isDesktop
  };
};

export default connect(mapStateToProps, { invertSlides })(FlashcardsToolbar);
