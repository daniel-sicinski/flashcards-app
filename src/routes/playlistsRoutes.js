const { Router } = require("express");
const { playlistService } = require("../lib/services");
const validatePlaylist = require("../lib/services/playlistService/validatePlaylist");
const catchException = require("../lib/utils/catchException");
const router = Router();

router.get(
  "/",
  catchException(async (req, res) => {
    const playlists = await playlistService.getPlaylists();

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
  catchException(async (req, res) => {
    const { playlistId } = req.params;

    const playlist = await playlistService.getPlaylist(playlistId);

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
  validatePlaylist,
  catchException(async (req, res) => {
    const { name, cardsIds } = req.body;

    const newPlaylist = await playlistService.addPlaylist(name, cardsIds);

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
  catchException(async (req, res) => {
    const { playlistId } = req.params;

    await playlistService.deletePlaylist(playlistId);

    res.status(204).end();
  })
);

module.exports = router;
