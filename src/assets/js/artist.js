/* eslint-disable import/extensions */

import * as api from './api.js';


export default {

  data: () => ({
    artist: '',
    albumList: []
  }),
  watch: {
    '$route' (to, from) {
      this.reloadPage();
    }
  },
  methods: {
    async reloadPage() {
      this.artist = await api.getArtist(this.$route.params.id);
      this.albumList = await api.getArtistAlbums(this.$route.params.id);
    }
  },

  async created() {
    this.artist = await api.getArtist(this.$route.params.id);
    this.albumList = await api.getArtistAlbums(this.$route.params.id);
  }
};

