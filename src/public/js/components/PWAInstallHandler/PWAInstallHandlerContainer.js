import { connect } from "react-redux";
import { clearDeferredPrompt } from "../../store/actions/UIActions";
import PWAInstallHandler from "./PWAInstallHandler";

const mapStateToProps = state => {
  return {
    showModal: state.auth.user && state.ui.PWAInstallDeferredPrompt,
    deferredPrompt: state.ui.PWAInstallDeferredPrompt
  };
};

export default connect(mapStateToProps, {
  clearDeferredPrompt
})(PWAInstallHandler);
