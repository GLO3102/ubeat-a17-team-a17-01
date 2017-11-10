/* eslint-disable import/extensions */


import * as api from './api.js'

export default {
  data: () => ({
    name: '',
    ownerEmail: 'userteam1@team1.com',
    playlists: [],
  }),

  methods: {
    async createPlaylist() {
      const newPlaylist = await api.createPlaylist(this.name, this.ownerEmail);
      this.name = '';
      this.playlists.push(newPlaylist);
    },

    async deletePlaylist(playlistId) {
      await api.deletePlaylist(playlistId);
      let index = this.playlists.findIndex((playlist) => playlist.id === playlistId);
      this.playlists.splice(index, 1);
    },

    async modifyPlaylistName(playlistId) {
      let index = this.playlists.findIndex((playlist) => playlist.id === playlistId);
      const name = this.playlists[index].name;
      api.modifyPlaylistName(playlistId, name,  this.ownerEmail);
    }
  },

  async created() {
    this.playlists = await api.getPlaylists(this.ownerEmail);
  }
};
