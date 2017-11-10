import * as api from './api';
import login from './authentication';

export default {
  data: () => ({
    name: '',
    playlists: [],
  }),

  methods: {
    async createPlaylist() {
      const newPlaylist = await api.createPlaylist(this.name);
      this.name = '';
      this.playlists.push(newPlaylist);
    },

    async deletePlaylist(playlistId) {
      await api.deletePlaylist(playlistId);
      const index = this.playlists.findIndex(playlist => playlist.id === playlistId);
      this.playlists.splice(index, 1);
    },

    async modifyPlaylistName(playlistId) {
      const index = this.playlists.findIndex(playlist => playlist.id === playlistId);
      const name = this.playlists[index].name;
      api.modifyPlaylistName(playlistId, name,  this.ownerEmail);
    }
  },

  async created() {
    await login();
    this.playlists = await api.getPlaylists('userteam1@team1.com');
  }
};
