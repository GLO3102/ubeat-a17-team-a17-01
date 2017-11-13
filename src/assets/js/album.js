/* eslint-disable import/extensions */

import Autocomplete from 'vue2-autocomplete-js';
import * as api from './api.js';
import * as util from './util.js';
import login from './authentication';

// Temporary for showcase of specific album
const albumId = 559334659;

export default {

  components: {
    'searchbar': Autocomplete
  },

  data: () => ({
    album: '',
    albumTracks: [],
    searchedPlaylist: {},
    searchPlaylistUrl: api.baseUrl+'/playlists',
    token: ''
  }),

  methods: {
    async addTrackPlaylist(track){
      if(typeof this.searchedPlaylist.name !== 'undefined') {
        await api.addTrackPlaylist(this.searchedPlaylist.id, track);
      }
      else {
        alert('You must look for a playlist below');
      }
    },
    async addAlbumPlaylist(){
      if(typeof this.searchedPlaylist.name !== 'undefined') {
        for (let track of this.albumTracks) {
          await api.addTrackPlaylist(this.searchedPlaylist.id, track);
        }
      }
      else {
          alert('You must look for a playlist below');
      }

    },
    displayTrackDuration(ms) {
      return util.displayTrackDuration(ms);
    },
    parseISOString(isoString) {
      return util.parseISOString(isoString);
    },
    processJSON(json) {
      return json;
    },
    selectPlaylist(playlist){
      this.searchedPlaylist = playlist;
    },
  },

  async created() {
    this.token = await login();
    this.album = await api.getAlbum(albumId);
    this.albumTracks = await api.getAlbumTracks(albumId);
  }
};
