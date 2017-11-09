/* eslint-disable import/extensions */


import * as api from './api.js'


export default {
  data: () => ({
    ownerEmail: 'userteam1@team1.com',
    playlistId: '',
    playlist: {}
  }),

  methods: {

    async modifyPlaylistName() {
      const name = this.playlist.name;
      api.modifyPlaylistName(this.playlist.id, name,  this.ownerEmail);
    }

  },

  async created() {
    this.playlist = await api.getPlaylist(this.$route.params.id);
  }
};
