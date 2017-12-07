/* eslint-disable import/extensions */

import * as api from './api.js';
import login from './authentication.js';


export default {

  data: () => ({
    artist: '',
    url: '',
    albumList: []
  }),

  async created() {
    await login();
    this.artist = await api.getArtist(this.$route.params.id);
    this.albumList = await api.getArtistAlbums(this.$route.params.id);
  }
};

