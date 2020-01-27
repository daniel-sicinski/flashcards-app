import React, { useState } from "react";
// import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
// import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
// import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
// import HighlightOffIcon from "@material-ui/icons/HighlightOff";
// import GlobalPlayNav from "../GlobalPlayNav/GlobalPlayNavContainer";
import Backdrop from "../Backdrop";
import AudioControls from "../AudioControls/AudioControlsContainer";
// import MobilePopupNav from "../MobilePopupNav/MobilePopupNav";
// import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
// import PlaylistNav from "../PlaylistsNav/PlaylistNavContainer";
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
  // hishistorytory
}) {
  const [isAudioPopupShown, setAudioPopupVisibility] = useState(false);
  const [isPlaylistPopupShown, setPlaylistPopupVisibility] = useState(false);

  const handleOnGlobalPlayClick = () => {
    setAudioPopupVisibility(true);

    if (isSelectStateActive && isNoCardsSelected) disableSelectState();
  };

  // const HomePageControls = () => (
  //   <>
  //     <SearchIcon className="toolbar__nav-icon" />
  //     {isSelectStateActive ? (
  //       <HighlightOffIcon
  //         className="toolbar__nav-icon"
  //         onClick={disableSelectState}
  //       />
  //     ) : (
  //       <AddCircleOutlineIcon
  //         className="toolbar__nav-icon"
  //         onClick={activateSelectState}
  //       />
  //     )}

  //     <PlayCircleFilledIcon
  //       className="toolbar__nav-icon"
  //       onClick={handleOnGlobalPlayClick}
  //     />
  //     <MobilePopupNav
  //       isPopupShown={isAudioPopupShown}
  //       hidePopup={() => setAudioPopupVisibility(false)}
  //     >
  //       <GlobalPlayNav />
  //     </MobilePopupNav>
  //   </>
  // );

  // const PlaylistsControls = () => (
  //   <div>
  //     <PlaylistAddCheckIcon
  //       className="toolbar__nav-icon"
  //       onClick={() => setPlaylistPopupVisibility(true)}
  //     />
  //     <MobilePopupNav
  //       isPopupShown={isPlaylistPopupShown}
  //       hidePopup={() => setPlaylistPopupVisibility(false)}
  //     >
  //       <PlaylistNav />
  //     </MobilePopupNav>
  //   </div>
  // );

  // const PlaylistViewControls = () => {
  //   return (
  //     <>
  //       <SearchIcon className="toolbar__nav-icon" />
  //       <PlaylistAddCheckIcon
  //         className="toolbar__nav-icon"
  //         onClick={() => setPlaylistPopupVisibility(true)}
  //       />
  //       <MobilePopupNav
  //         isPopupShown={isPlaylistPopupShown}
  //         hidePopup={() => setPlaylistPopupVisibility(false)}
  //       >
  //         <PlaylistNav />
  //       </MobilePopupNav>
  //       <PlayCircleFilledIcon
  //         className="toolbar__nav-icon"
  //         onClick={handleOnGlobalPlayClick}
  //       />
  //       <MobilePopupNav
  //         isPopupShown={isAudioPopupShown}
  //         hidePopup={() => setAudioPopupVisibility(false)}
  //       >
  //         <GlobalPlayNav />
  //       </MobilePopupNav>
  //     </>
  //   );
  // };

  // const renderIconsBasedOnPath = () => {
  //   const { pathname } = history.location;
  //   switch (pathname) {
  // case "/":
  //   return renderHomePageIcons();
  // case "/playlists":
  //   return renderPlaylistsIcons();
  // case "/playlists/new":
  //   return <PlaylistAddEdit />;
  // case /^\/playlists\/edit/.test(pathname) && pathname:
  //   return <PlaylistAddEdit />;
  // case /^\/playlists\/.+$/.test(pathname) && pathname:
  //   return <PlaylistViewControls />;
  //     default:
  //       return null;
  //   }
  // };

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
