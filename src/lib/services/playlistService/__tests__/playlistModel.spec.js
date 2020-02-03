const mongoose = require("mongoose");
const PlaylistModel = require("../playlistModel");

describe("PlaylistModel", () => {
  let db;

  beforeAll(done => {
    db = mongoose.connect("mongodb://localhost/flashcards_app_test", done);
  });

  afterAll(done => db.close(done));

  beforeEach(done => {
    PlaylistModel.remove({}, done);
  });

  it("correctly serializes the model", async () => {
    const name = "Test playlist";
    const cardsIds = ["1", "2"];
    const createdAt = new Date("2019-08-23T16:42:41.897Z");

    const playlist = new PlaylistModel({
      name,
      cardsIds,
      createdAt
    });

    await playlist.save();
    const savedPlaylist = await PlaylistModel.findById(playlist.id);
    const expected = {
      cardsIds,
      _id: playlist.id,
      name,
      createdAt,
      __v: 0
    };

    const expectedString = JSON.stringify(expected);
    const actual = JSON.stringify(savedPlaylist);
    expect(expectedString).toEqual(actual);
  });
});
