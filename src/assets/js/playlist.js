import Autocomplete from 'vue2-autocomplete-js';
import Cookies from 'js-cookie';
import * as api from './api';
import * as util from './util';

export default {
  components: {
    searchbar: Autocomplete
  },
  data: () => ({
    ownerEmail: Cookies.get('email'),
    playlist: {},
    searchedTrack: {},
    searchTrackUrl: `${api.baseUrl}/search/tracks`,
    token: Cookies.get('token')
  }),

  methods: {

    async addTrackPlaylist(playlistId) {
      if (!this.playlist.tracks.includes(this.searchedTrack)) {
        await api.addTrackPlaylist(playlistId, this.searchedTrack);
        this.playlist.tracks.push(this.searchedTrack);
        this.searchedTrack = {};
        $('.autocomplete-input').val('');
        $('.add-track-button').addClass('hide');
      }
    },

    async deleteTrack(playlistId, trackId) {
      this.playlist = await api.deleteTrackPlaylist(playlistId, trackId);
    },

    async modifyPlaylistName() {
      const name = this.playlist.name;
      await api.modifyPlaylistName(this.playlist.id, name, this.ownerEmail);
    },

    displayTrackDuration(ms) {
      return util.displayTrackDuration(ms);
    },

    processJSON(json) {
      return json.results.slice(0, 5);
    },

    selectTrack(track) {
      this.searchedTrack = track;
      $('.add-track-button').removeClass('hide');
    },

    isMyPlaylist() {
      if (this.playlist.owner.email === Cookies.get('email')) {
        return true;
      } else {
        return false;
      }
    }
  },

  async created() {
    this.playlist = await api.getPlaylist(this.$route.params.id);
  },

  async mounted() {
    const target = $('.collection.tracks-list')[0];

    const helpPlaylist = $('#help-playlist');

    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if ($('.collection.tracks-list li').length > 0) {
          helpPlaylist.hide();
        } else {
          helpPlaylist.removeClass('hide');
          $('#help-playlist').show();
        }
      });
    });

    const config = {
      attributes: true,
      childList: true,
      characterData: true
    };

    observer.observe(target, config);
  }
};
