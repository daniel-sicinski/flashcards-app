const { Router } = require("express");
const { playlistService } = require("../lib/services");
const validatePlaylist = require("../lib/services/playlistService/validatePlaylist");
const catchException = require("../lib/utils/catchException");
const userIsLoggedIn = require("../lib/utils/userIsLoggedIn");
const router = Router();

router.get(
  "/",
  userIsLoggedIn,
  catchException(async (req, res) => {
    const { userId } = req.session;
    const playlists = await playlistService.getPlaylists(userId);

    res.status(200).json({
      status: "success",
      data: {
        playlists
      }
    });
  })
);

router.get(
  "/:playlistId",
  userIsLoggedIn,
  catchException(async (req, res) => {
    const { playlistId } = req.params;
    const { userId } = req.session;

    const playlist = await playlistService.getPlaylist(playlistId, userId);

    res.status(200).json({
      status: "success",
      data: {
        playlist
      }
    });
  })
);

router.post(
  "/",
  userIsLoggedIn,
  validatePlaylist,
  catchException(async (req, res) => {
    const { name, cardsIds } = req.body;
    const { userId } = req.session;

    const newPlaylist = await playlistService.addPlaylist(
      name,
      cardsIds,
      userId
    );

    res.status(201).json({
      status: "success",
      data: {
        newPlaylist
      }
    });
  })
);

router.put(
  "/:playlistId",
  userIsLoggedIn,
  validatePlaylist,
  catchException(async (req, res) => {
    const { playlistId } = req.params;
    const { name, cardsIds } = req.body;

    const updatedPlaylist = await playlistService.updatePlaylist(
      playlistId,
      name,
      cardsIds
    );

    res.status(200).json({
      status: "success",
      data: {
        updatedPlaylist
      }
    });
  })
);

router.delete(
  "/:playlistId",
  userIsLoggedIn,
  catchException(async (req, res) => {
    const { playlistId } = req.params;

    await playlistService.deletePlaylist(playlistId);

    res.status(204).end();
  })
);

module.exports = router;
