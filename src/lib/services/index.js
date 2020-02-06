const PlaylistService = require("./playlistService/playlistService");
const PlaylistModel = require("./playlistService/playlistModel");
const CardsService = require("./cardsService/cardsService");
const CardModel = require("./cardsService/CardModel");
const UserService = require("./userService/userService");
const UserModel = require("./userService/userModel");

const playlistService = new PlaylistService(PlaylistModel);
const cardsService = new CardsService(CardModel);
const userService = new UserService(UserModel);

module.exports = {
  playlistService,
  cardsService,
  userService
};
