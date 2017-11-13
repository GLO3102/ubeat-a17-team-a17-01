/* eslint-disable import/extensions */

import * as api from './api.js';
import login from './authentication.js';

// Temporary for showcase of specific artist
const artistId = 32940;

export default {

  data: () => ({
    artist: '',
    url: '',
    albumList: []
  }),

  async created() {
    await login();
    this.artist = await api.getArtist(artistId);
    this.albumList = await api.getArtistAlbums(artistId);
  }
};

