const PlaylistService = require("./playlistService/playlistService");
const PlaylistModel = require("./playlistService/playlistModel");

const playlistService = new PlaylistService(PlaylistModel);

module.exports = {
  playlistService
};
