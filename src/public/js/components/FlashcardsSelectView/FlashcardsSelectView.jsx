import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function FlashcardsSelectView({
  fetchPlaylists,
  playlists,
  isDesktop
}) {
  useEffect(() => {
    fetchPlaylists();
  }, []);

  const containerClass = isDesktop
    ? "flashcardsSelect--desktop"
    : "flashcardsSelect--mobile";

  const renderPlaylistsList = () => {
    return playlists.map(playlist => {
      return (
        <Link
          key={playlist._key}
          to={`/flashcards?type=playlists&id=${playlist._id}`}
          className="flashcardsSelect__link"
        >
          <ListItem button divider>
            <ListItemText primary={playlist.name} />
          </ListItem>
        </Link>
      );
    });
  };

  return (
    <div className={containerClass}>
      <Link to={`/flashcards?type=all`} className="flashcardsSelect__link">
        <ExpansionPanel>
          <ExpansionPanelSummary id="panel1a-header">
            <p>Wszystkie karty</p>
          </ExpansionPanelSummary>
        </ExpansionPanel>
      </Link>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          id="panel2a-header"
        >
          <p>Karty według kategorii</p>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List style={{ width: "100%" }} component="nav">
            <ListItem button divider>
              <ListItemText primary="Dom" />
            </ListItem>
            <ListItem button divider>
              <ListItemText primary="Relacje" />
            </ListItem>
            <ListItem button divider>
              <ListItemText primary="Czasowniki" />
            </ListItem>
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          id="panel3a-header"
        >
          <p>Karty z playlisty</p>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List style={{ width: "100%" }} component="nav">
            {renderPlaylistsList()}
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
