const PlaylistService = require("./playlistService/playlistService");
const PlaylistModel = require("./playlistService/playlistModel");
const CardsService = require("./cardsService/cardsService");
const CardModel = require("./cardsService/CardModel");

const playlistService = new PlaylistService(PlaylistModel);
const cardsService = new CardsService(CardModel);

module.exports = {
  playlistService,
  cardsService
};
