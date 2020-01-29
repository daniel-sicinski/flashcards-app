const express = require("express");
const path = require("path");

const { playlistsRoutes } = require("./routes");
const { cardsRoutes } = require("./routes");
const { audioRoutes } = require("./routes");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "dist")));
app.use("/api/v1/playlists", playlistsRoutes);
app.use("/api/v1/cards", cardsRoutes);
app.use("/api/v1/audioTrack", audioRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    status: "fail",
    error: error.message
  });
});

module.exports = app;
