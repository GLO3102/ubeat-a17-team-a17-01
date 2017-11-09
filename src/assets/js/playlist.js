import * as api from './api.js'

export default {
  props: ['deletePlaylist', 'ownerEmail', 'playlist'],

  methods: {
    modifyPlaylistName() {
      console.log(this.playlist)
      const playlistId = this.playlist.id;
      const name = this.playlist.name;
      api.modifyPlaylistName(playlistId, name, this.ownerEmail);
    }
  }
}
