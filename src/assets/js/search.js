
import Autocomplete from 'vue2-autocomplete-js';
import Cookies from 'js-cookie';
import * as api from './api.js';


export default {
  components: {
    searchbar: Autocomplete
  },

  data: () => ({
    search: '',
    param: '',
    searchResults: [],
    searchedPlaylist: {},
    searchPlaylistUrl: `${api.baseUrl}/playlists`,
    token: Cookies.get('token')

  }),
  watch: {
    '$route' (to, from) {
      this.reloadPage();
    }
  },
  methods: {
    async reloadPage() {
      this.search = this.$route.query.result;
      this.param = encodeURIComponent(this.$route.query.result);
      this.searchResults = await api.getSearchResults(this.param).then(() => {
        this.processResults();
      });
    },
    processResults() {
      const arrayLength = this.searchResults.length;

      for (let i = 0; i < arrayLength; i++) {
        if (this.searchResults[i].wrapperType === 'artist') {
          this.searchResults[i].artist = true;
          this.searchResults[i].album = false;
          this.searchResults[i].track = false;
        } else if (this.searchResults[i].wrapperType === 'track') {
          this.searchResults[i].artist = false;
          this.searchResults[i].album = false;
          this.searchResults[i].track = true;
        } else {
          this.searchResults[i].artist = false;
          this.searchResults[i].album = true;
          this.searchResults[i].track = false;
        }
      }
    },
    selectPlaylist(playlist) {
      this.searchedPlaylist = playlist;
    },
    processJSON(json) {
      const name = $('#searchPlaylist').val();
      console.log(name);
      return json.filter(result => result.name.includes(name));
    },
    async addTrackPlaylist(track) {
      if (typeof this.searchedPlaylist.name !== 'undefined') {
        await api.addTrackPlaylist(this.searchedPlaylist.id, track);
      }
    },
    async addAlbumPlaylist(album) {
      if (typeof this.searchedPlaylist.name !== 'undefined') {
        const albumTracks = await api.getAlbumTracks(album.collectionId);
        const arrayLength = albumTracks.length;
        for (let i = 0; i < arrayLength; i++) {
          api.addTrackPlaylist(albumTracks[i].trackName);
        }
      }
    }
  },

  async created() {
    this.search = this.$route.query.result;
    this.param = encodeURIComponent(this.$route.query.result);
    this.searchResults = await api.getSearchResults(this.param).then(() => {
      this.processResults();
    });
  }
};
