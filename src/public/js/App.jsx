import React, { Component } from "react";
import { connect } from "react-redux";
import AllCardsView from "./components/AllCardsView/AllCardsViewContainer";
import AudioManager from "./containers/AudioManager";
import { fetchCardsStart } from "./store/actions/cardsActions";
import Navigation from "./components/Navigation/NavigationContainer";
import { Route, Switch } from "react-router-dom";
import Playlists from "./components/Playlists/PlaylistsContainer";
import PlaylistView from "./components/PlaylistView/PlaylistViewContainer";
import PlaylistEditView from "./components/PlaylistEditView/PlaylistEditViewContainer";
import NewPlaylistView from "./components/NewPlaylistView/NewPlaylistViewContainer";
import { setDeviceType } from "./store/actions/UIActions";
import { MIN_DESKTOP_WIDTH } from "./config";

class App extends Component {
  componentDidMount() {
    this.props.fetchCardsStart();

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
          <Route path="/" exact component={AllCardsView} />
          <Route path="/playlists/new" exact component={NewPlaylistView} />
          <Route
            path="/playlists/edit/:playlistId"
            exact
            component={PlaylistEditView}
          />
          <Route path="/playlists/:playlistId" exact component={PlaylistView} />
          <Route path="/playlists" exact component={Playlists} />
        </Switch>
        <Navigation />
        <AudioManager />
      </>
    );
  }
}

export default connect(null, { fetchCardsStart, setDeviceType })(App);
