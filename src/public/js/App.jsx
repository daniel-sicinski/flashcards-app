import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { setDeviceType, setDeferredPrompt } from "./store/actions/UIActions";
import { MIN_DESKTOP_WIDTH } from "./config";
import Register from "./components/Register/RegisterContainer";
import Login from "./components/Login/LoginContainer";
import AppContainer from "./components/AppContainer/AppContainerContainer";
import GlobalErrorHandler from "./components/GlobalErrorHandler/GlobalErrorHandlerContainer";

class App extends Component {
  componentDidMount() {
    this.handleDeviceType();
    window.addEventListener("resize", this.handleDeviceType);

    window.addEventListener(
      "beforeinstallprompt",
      this.handleBeforeInstallPrompt
    );
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleDeviceType);
    window.removeEventListener("resize", this.handleBeforeInstallPrompt);
  }

  handleDeviceType = () => {
    const isDesktop = window.innerWidth > MIN_DESKTOP_WIDTH;
    this.props.setDeviceType(isDesktop);
  };

  handleBeforeInstallPrompt = e => {
    e.preventDefault();
    this.props.setDeferredPrompt(e);
    return;
  };

  render() {
    return (
      <>
        <Switch>
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route component={AppContainer} />
        </Switch>
        <GlobalErrorHandler />
      </>
    );
  }
}

export default connect(null, { setDeviceType, setDeferredPrompt })(App);
