import * as api from './api.js'

export default {
  props: ['deletePlaylist', 'ownerEmail', 'playlist'],

  methods: {
    modifyPlaylistName() {
      const {playlistId, name} = this.playlist;
      api.modifyPlaylistName(playlistId, name, ownerEmail);
    }
  }
}
