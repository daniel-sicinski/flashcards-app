import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import AllCardsView from "../AllCardsView/AllCardsViewContainer";
import AudioManager from "../AudioManager/AudioManager";
import Navigation from "../Navigation/NavigationContainer";
import Playlists from "../Playlists/PlaylistsContainer";
import PlaylistView from "../PlaylistView/PlaylistViewContainer";
import PlaylistEditView from "../PlaylistEditView/PlaylistEditViewContainer";
import NewPlaylistView from "../NewPlaylistView/NewPlaylistViewContainer";
import UserPanelView from "../UserPanelView/UserPanelViewContainer";
import Spinner from "../Spinner/Spinner";

export default function AppContainer({
  userName,
  fetchCardsStart,
  checkUserAuthStatus
}) {
  useEffect(() => {
    checkUserAuthStatus();
  }, []);

  useEffect(() => {
    if (userName) {
      fetchCardsStart();
    }
  }, [userName]);

  return (
    <>
      {userName ? (
        <>
          <Switch>
            <Route path="/" exact component={AllCardsView} />
            <Route path="/playlists/new" exact component={NewPlaylistView} />
            <Route
              path="/playlists/edit/:playlistId"
              exact
              component={PlaylistEditView}
            />
            <Route
              path="/playlists/:playlistId"
              exact
              component={PlaylistView}
            />
            <Route path="/playlists" exact component={Playlists} />
            <Route path="/user" exact component={UserPanelView} />
          </Switch>
          <Navigation />
          <AudioManager />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}
