const PlaylistService = require("../playlistService");

describe("PlaylistService", () => {
  it("has a module", () => {
    expect(PlaylistService).toBeDefined(),
      expect(typeof PlaylistService).toBe("function");
  });

  describe("addPlaylist", () => {
    it("adds playlist to DB", async () => {
      const mockSave = jest.fn();

      const PlaylistModel = jest.fn(() => {
        return {
          save: mockSave
        };
      });
      const name = "test name";
      const cardsIds = ["1", "2"];

      const playlistService = new PlaylistService(PlaylistModel);

      await playlistService.addPlaylist(name, cardsIds);

      expect(PlaylistModel).toHaveBeenCalledWith({
        name,
        cardsIds
      });
      expect(mockSave).toHaveBeenCalled();
    });
  });

  describe("updatePlaylist", () => {
    it("updates playlist in DB", async () => {
      const id = 1;
      const name = "test name";
      const cardsIds = ["1", "2"];
      const findByIdAndUpdate = jest
        .fn()
        .mockReturnValue(Promise.resolve({ id, name, cardsIds }));

      const PlaylistModel = {
        findByIdAndUpdate
      };

      const playlistService = new PlaylistService(PlaylistModel);

      const updatedPlaylist = await playlistService.updatePlaylist(
        id,
        name,
        cardsIds
      );

      expect(findByIdAndUpdate).toHaveBeenCalledWith(
        id,
        { name, cardsIds },
        { new: true }
      );
      expect(updatedPlaylist).toEqual({ id, name, cardsIds });
    });
  });

  describe("deletePlaylist", () => {
    it("deletes playlist", async () => {
      const id = 1;
      const findByIdAndRemove = jest.fn();

      const PlaylistModel = {
        findByIdAndRemove
      };

      const playlistService = new PlaylistService(PlaylistModel);

      await playlistService.deletePlaylist(id);

      expect(findByIdAndRemove).toHaveBeenCalledWith(id);
    });
  });

  describe("getPlaylists", () => {
    it("retrieves all playlists", async () => {
      const query = {};
      const playlist = { id: 1, name: "playlist", cardsIds: ["1", "2"] };
      const find = jest.fn().mockReturnValue(Promise.resolve([playlist]));

      const PlaylistModel = {
        find
      };

      const playlistService = new PlaylistService(PlaylistModel);

      const playlists = await playlistService.getPlaylists();

      expect(find).toHaveBeenCalledWith(query);
      expect(playlists).toContain(playlist);
    });
  });

  describe("getPlaylist", () => {
    it("retrieves one playlists", async () => {
      const id = 1;
      const playlist = { id: 1, name: "playlist", cardsIds: ["1", "2"] };
      const findById = jest.fn().mockReturnValue(Promise.resolve(playlist));

      const PlaylistModel = {
        findById
      };

      const playlistService = new PlaylistService(PlaylistModel);

      const playlistFromDb = await playlistService.getPlaylist(id);

      expect(findById).toHaveBeenCalledWith(id);
      expect(playlistFromDb).toBe(playlist);
    });
  });
});
