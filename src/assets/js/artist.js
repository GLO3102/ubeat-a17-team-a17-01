/* eslint-disable import/extensions */

import * as api from './api.js';


export default {

  data: () => ({
    artist: '',
    albumList: []
  }),

  async created() {
    this.artist = await api.getArtist(this.$route.params.id);
    this.albumList = await api.getArtistAlbums(this.$route.params.id);
  }
};

