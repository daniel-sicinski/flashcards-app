import React, { Component } from "react";
import { connect } from "react-redux";
import Cards from "./containers/Cards/Cards";
import AudioManager from "./containers/AudioManager";
import { fetchCardsStart } from "./store/actions/cardsActions";
import Navigation from "./containers/Navigation";
import { Route, Switch } from "react-router-dom";
import Playlists from "./components/Playlists/PlaylistsContainer";
import PlaylistView from "./components/PlaylistView/PlaylistViewContainer";
import PlaylistEditView from "./components/PlaylistEditView/PlaylistEditViewContainer";

class App extends Component {
  componentDidMount() {
    this.props.fetchCardsStart();
  }

  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={Cards} />
          <Route path="/playlists/new" exact component={Cards} />
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

export default connect(null, { fetchCardsStart })(App);
