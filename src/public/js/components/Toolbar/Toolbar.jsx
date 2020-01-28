import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Backdrop from "../Backdrop";
import AudioControls from "../AudioControls/AudioControlsContainer";
import AddEditPlaylistManager from "../AddEditPlaylistManager/AddEditPlaylistManagerContainer";
import HomePageControls from "./HomePageControls/HomePageControls";
import PlaylistViewControls from "./PlaylistViewControls/PlaylistViewControls";
import PlaylistsControls from "./PlaylistsControls/PlaylistsControls";

import { Route, Switch } from "react-router-dom";

export default function Toolbar({
  isGlobalAudioPlay,
  isSelectStateActive,
  activateSelectState,
  disableSelectState,
  isNoCardsSelected,
  showSideNav
}) {
  const [isAudioPopupShown, setAudioPopupVisibility] = useState(false);
  const [isPlaylistPopupShown, setPlaylistPopupVisibility] = useState(false);

  const handleOnGlobalPlayClick = () => {
    setAudioPopupVisibility(true);

    if (isSelectStateActive && isNoCardsSelected) disableSelectState();
  };

  const hidePopups = () => {
    setAudioPopupVisibility(false);
    setPlaylistPopupVisibility(false);
  };

  return (
    <div className="toolbar">
      {isGlobalAudioPlay ? (
        <AudioControls />
      ) : (
        <div className="toolbar__nav">
          <MenuIcon className="toolbar__nav-icon" onClick={showSideNav} />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <HomePageControls
                  activateSelectState={activateSelectState}
                  disableSelectState={disableSelectState}
                  isSelectStateActive={isSelectStateActive}
                  handleOnGlobalPlayClick={handleOnGlobalPlayClick}
                  isAudioPopupShown={isAudioPopupShown}
                  setAudioPopupVisibility={setAudioPopupVisibility}
                />
              )}
            />
            <Route
              path="/playlists/new"
              exact
              component={AddEditPlaylistManager}
            />
            <Route
              path="/playlists/edit/:playlistId"
              exact
              component={AddEditPlaylistManager}
            />
            <Route
              path="/playlists/:playlistId"
              exact
              render={() => (
                <PlaylistViewControls
                  isPlaylistPopupShown={isPlaylistPopupShown}
                  setPlaylistPopupVisibility={setPlaylistPopupVisibility}
                  isAudioPopupShown={isAudioPopupShown}
                  setAudioPopupVisibility={setAudioPopupVisibility}
                  handleOnGlobalPlayClick={handleOnGlobalPlayClick}
                />
              )}
            />
            <Route
              path="/playlists"
              exact
              render={() => (
                <PlaylistsControls
                  isPlaylistPopupShown={isPlaylistPopupShown}
                  setPlaylistPopupVisibility={setPlaylistPopupVisibility}
                />
              )}
            />
          </Switch>
        </div>
      )}
      <Backdrop
        show={isAudioPopupShown || isPlaylistPopupShown}
        hideOnClick={hidePopups}
      />
    </div>
  );
}
