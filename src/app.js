const express = require("express");
const path = require("path");
const fs = require("fs");

const { playlistsRoutes } = require("./routes");
const { cardsRoutes } = require("./routes");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "dist")));
app.use("/api/v1/playlists", playlistsRoutes);
app.use("/api/v1/cards", cardsRoutes);

app.get("/api/v1/audioTrack/:audioId", (req, res) => {
  const { audioId } = req.params;

  const filePathEngWord = path.resolve(
    __dirname,
    "assets",
    "mp3",
    `${audioId}.mp3`
  );

  const stat = fs.statSync(filePathEngWord);

  res.writeHead(200, {
    "Content-Type": "application/octet-stream",
    "Content-Length": stat.size
  });

  const readStream = fs.createReadStream(filePathEngWord);
  readStream.pipe(res);
});

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
