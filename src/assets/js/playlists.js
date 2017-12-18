import Cookies from 'js-cookie';
import * as api from './api';

export default {
  data: () => ({
    name: '',
    playlists: [],
  }),

  methods: {
    async createPlaylist() {
      this.name = (this.name === '') ? 'Untitled' : this.name;
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
      api.modifyPlaylistName(playlistId, name, this.ownerEmail);
    }
  },

  async created() {
    this.playlists = await api.getPlaylists(Cookies.get('email'));
  }
};
