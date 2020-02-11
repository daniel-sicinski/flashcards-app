import { connect } from "react-redux";
import AppContainer from "./AppContainer";

import { fetchCardsStart } from "../../store/actions/cardsActions";
import { checkUserAuthStatus } from "../../store/actions/authActions";

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps, {
  fetchCardsStart,
  checkUserAuthStatus
})(AppContainer);
