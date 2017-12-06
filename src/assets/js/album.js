/* eslint-disable import/extensions */

import Autocomplete from 'vue2-autocomplete-js';
import * as api from './api.js';
import * as util from './util.js';
import login from './authentication';


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
    },
    async addAlbumPlaylist(){
      if(typeof this.searchedPlaylist.name !== 'undefined') {
        for (let track of this.albumTracks) {
          await api.addTrackPlaylist(this.searchedPlaylist.id, track);
        }
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
    this.album = await api.getAlbum(this.$route.params.id);
    this.albumTracks = await api.getAlbumTracks(this.$route.params.id);
  }
};
