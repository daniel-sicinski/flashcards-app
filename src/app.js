const express = require("express");
const path = require("path");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const { playlistsRoutes } = require("./routes");
const { cardsRoutes } = require("./routes");
const { audioRoutes } = require("./routes");
const { userRoutes } = require("./routes");

if (process.env.NODE_ENV !== "production") {
  const dotenv = require("dotenv");
  dotenv.config({ path: "./.env" });
}

const app = express();

const store = new MongoDBStore({
  uri: process.env.DATABASE_URL,
  collection: "mySessions"
});

store.on("error", error => console.error(error));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: {
      sameSite: true,
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
      httpOnly: true,
      secure: false
    },
    name: "session",
    store: store,
    resave: false,
    saveUninitialized: false
  })
);

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "dist")));
app.use("/api/v1/playlists", playlistsRoutes);
app.use("/api/v1/cards", cardsRoutes);
app.use("/api/v1/audioTrack", audioRoutes);
app.use("/api/v1", userRoutes);

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
