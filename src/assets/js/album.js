/* eslint-disable import/extensions */

import * as Materialize from 'materialize-css';
import Autocomplete from 'vue2-autocomplete-js';
import Cookies from 'js-cookie';
import * as api from './api.js';
import * as util from './util.js';


export default {

  components: {
    searchbar: Autocomplete
  },

  data: () => ({
    album: '',
    albumTracks: [],
    searchedPlaylist: {},
    searchPlaylistUrl: `${api.baseUrl}/playlists`,
    token: Cookies.get('token')
  }),

  watch: {
    $route() {
      this.created();
    }
  },

  methods: {
    async addTrackPlaylist(track) {
      if (typeof this.searchedPlaylist.name !== 'undefined') {
        await api.addTrackPlaylist(this.searchedPlaylist.id, track).then(() => {
          if (typeof track.trackName !== 'undefined') {
            const toastContent = $(`<span>"${track.trackName}" has been added to "${this.searchedPlaylist.name}"</span>`);
            Materialize.toast(toastContent, 4000, 'green');
          }
        });
      }
    },
    async addAlbumPlaylist() {
      if (typeof this.searchedPlaylist.name !== 'undefined') {
        this.albumTracks.forEach((track) => {
          api.addTrackPlaylist(this.searchedPlaylist.id, track).then((playlist) => {
            if (typeof playlist.name !== 'undefined') {
              const toastContent = $(`<span>"${track.trackName}" has been added to "${playlist.name}"</span>`);
              Materialize.toast(toastContent, 4000, 'green');
            }
          });
        });
      }
    },
    displayTrackDuration(ms) {
      return util.displayTrackDuration(ms);
    },
    parseISOString(isoString) {
      return util.parseISOString(isoString);
    },
    processJSON(json) {
      const name = $('#searchPlaylist').val();
      return json.filter(result => result.name.includes(name));
    },
    selectPlaylist(playlist) {
      this.searchedPlaylist = playlist;
    }
  },

  async created() {
    this.album = await api.getAlbum(this.$route.params.id);
    this.albumTracks = await api.getAlbumTracks(this.$route.params.id);
  }
};
