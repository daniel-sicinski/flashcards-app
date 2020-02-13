import React from "react";
import { Route, Switch } from "react-router-dom";
import AudioControls from "../../AudioControls/AudioControlsContainer";
import GlobalPlayNav from "../../GlobalPlayNav/GlobalPlayNavContainer";
import PlaylistNav from "../../PlaylistsNav/PlaylistNavContainer";
import AddEditPlaylistManager from "../../AddEditPlaylistManager/AddEditPlaylistManagerContainer";
import SelectCardsControl from "./SelectCardsControl/SelectCardsControl";
import Searchbar from "../../Searchbar/Searchbar";
import FlashcardsToolbar from "../../FlashcardsToolbar/FlashcardsToolbarContainer";

export default function DesktopToolbar({
  isGlobalAudioPlay,
  isSelectStateActive,
  activateSelectState,
  disableSelectState
}) {
  return (
    <div className="desktop-toolbar">
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <>
              {isGlobalAudioPlay ? (
                <AudioControls />
              ) : (
                <>
                  <Searchbar />
                  <GlobalPlayNav />
                  <SelectCardsControl
                    isSelectStateActive={isSelectStateActive}
                    activateSelectState={activateSelectState}
                    disableSelectState={disableSelectState}
                  />
                </>
              )}
            </>
          )}
        />
        <Route path="/playlists/new" exact component={AddEditPlaylistManager} />
        <Route
          path="/playlists/edit/:playlistId"
          exact
          component={AddEditPlaylistManager}
        />
        <Route
          path="/playlists/:playlistId"
          exact
          render={() => (
            <>
              {isGlobalAudioPlay ? (
                <AudioControls />
              ) : (
                <>
                  <Searchbar />
                  <GlobalPlayNav />
                  <PlaylistNav />
                  <SelectCardsControl
                    isSelectStateActive={isSelectStateActive}
                    activateSelectState={activateSelectState}
                    disableSelectState={disableSelectState}
                  />
                </>
              )}
            </>
          )}
        />
        <Route path="/playlists" exact component={PlaylistNav} />
        <Route path="/flashcards" component={FlashcardsToolbar} />
      </Switch>
    </div>
  );
}
