import { connect } from "react-redux";
import GlobalErrorHandler from "./GlobalErrorHandler";
import { handleErrorMessage } from "./handleErrorMessage";
import { clearErrorMessage } from "../../store/actions/UIActions";

const mapStateToProps = state => {
  return {
    error: handleErrorMessage(
      state.cards.error ||
        state.audio.error ||
        state.playlists.error ||
        state.auth.error
    )
  };
};

export default connect(mapStateToProps, { clearErrorMessage })(
  GlobalErrorHandler
);
