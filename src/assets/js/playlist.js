import Autocomplete from 'vue2-autocomplete-js';
import * as api from './api';
import login from './authentication';

export default {
  components: {
    'tracksearchbar': Autocomplete
  },
  data: () => ({
    ownerEmail: 'userteam1@team1.com',
    playlistId: '',
    playlist: {},
    searchedTrack: {},
    searchTrackUrl: api.baseUrl+'/search/tracks',
    token: ''
  }),

  methods: {

    async addTrackPlaylist(playlistId) {
      if(!this.playlist.tracks.includes(this.searchedTrack)) {
        await api.addTrackPlaylist(playlistId, this.searchedTrack);
        this.playlist.tracks.push(this.searchedTrack);
        this.searchedTrack = {};
        $('.autocomplete-input').val('');
        $('.add-track-button').addClass('hide');
      }
    },

    async deleteTrack(playlistId, trackId) {
      await api.deleteTrackPlaylist(playlistId, trackId);
      const index = this.playlist.tracks.findIndex(track => track.id === trackId);
      this.playlist.tracks.splice(index, 1);
    },

    async modifyPlaylistName() {
      const name = this.playlist.name;
      await api.modifyPlaylistName(this.playlist.id, name,  this.ownerEmail);
    },

    processJSON(json) {
      return json.results;
    },

    selectTrack(track){
      this.searchedTrack = track;
      $('.add-track-button').removeClass('hide');
    },

    displayTrackDuration(ms){
      const minutes = Math.floor(ms / 60000);
      const seconds = ((ms % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

  },

  async created() {
    this.token = await login();
    this.playlist = await api.getPlaylist(this.$route.params.id);
  },

  async mounted() {
    const target = $('.collection.tracks-list')[0];

    const helpPlaylist = $('#help-playlist');

    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if($('.collection.tracks-list li').length > 0) {
          helpPlaylist.hide();
        }
        else {
          helpPlaylist.removeClass("hide");
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
