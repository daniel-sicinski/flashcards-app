import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { setDeviceType } from "./store/actions/UIActions";
import { MIN_DESKTOP_WIDTH } from "./config";
import Register from "./components/Register/RegisterContainer";
import Login from "./components/Login/LoginContainer";
import AppContainer from "./components/AppContainer/AppContainerContainer";

class App extends Component {
  componentDidMount() {
    this.handleDeviceType();
    window.addEventListener("resize", this.handleDeviceType);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleDeviceType);
  }

  handleDeviceType = () => {
    const isDesktop = window.innerWidth > MIN_DESKTOP_WIDTH;
    this.props.setDeviceType(isDesktop);
  };

  render() {
    return (
      <>
        <Switch>
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route component={AppContainer} />
        </Switch>
      </>
    );
  }
}

export default connect(null, { setDeviceType })(App);
