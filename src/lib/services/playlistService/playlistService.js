class PlaylistService {
  constructor(PlaylistModel) {
    this.PlaylistModel = PlaylistModel;
    this.getPlaylists = this.getPlaylists.bind(this);
    this.getPlaylist = this.getPlaylist.bind(this);
    this.addPlaylist = this.addPlaylist.bind(this);
    this.updatePlaylist = this.updatePlaylist.bind(this);
    this.deletePlaylist = this.deletePlaylist.bind(this);
  }

  getPlaylists() {
    return this.PlaylistModel.find({});
  }

  getPlaylist(id) {
    return this.PlaylistModel.findById(id);
  }

  async addPlaylist(name, cardsIds) {
    const playlist = await new this.PlaylistModel({
      name,
      cardsIds
    }).save();

    return playlist;
  }

  async updatePlaylist(id, name, cardsIds) {
    const updatedPlaylist = await this.PlaylistModel.findByIdAndUpdate(
      id,
      { name, cardsIds },
      { new: true }
    );

    return updatedPlaylist;
  }

  deletePlaylist(id) {
    return this.PlaylistModel.findByIdAndRemove(id);
  }
}

module.exports = PlaylistService;
