import React, { Component } from "react";
import { connect } from "react-redux";
import AllCardsView from "./components/AllCardsView/AllCardsViewContainer";
import AudioManager from "./components/AudioManager/AudioManager";
import { fetchCardsStart } from "./store/actions/cardsActions";
import Navigation from "./components/Navigation/NavigationContainer";
import { Route, Switch } from "react-router-dom";
import Playlists from "./components/Playlists/PlaylistsContainer";
import PlaylistView from "./components/PlaylistView/PlaylistViewContainer";
import PlaylistEditView from "./components/PlaylistEditView/PlaylistEditViewContainer";
import NewPlaylistView from "./components/NewPlaylistView/NewPlaylistViewContainer";
import { setDeviceType } from "./store/actions/UIActions";
import { MIN_DESKTOP_WIDTH } from "./config";
import Register from "./components/Register/RegisterContainer";
import AppContainer from "./components/AppContainer/AppContainerContainer";

class App extends Component {
  componentDidMount() {
    // this.props.fetchCardsStart();

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
          <Route component={AppContainer} />
        </Switch>
      </>
    );
  }
}

export default connect(null, { setDeviceType })(App);
