/* eslint-disable no-underscore-dangle */

import * as Materialize from 'materialize-css';
import Autocomplete from 'vue2-autocomplete-js';
import Cookies from 'js-cookie';
import * as api from './api';
import router from '../../router/index';

export default {
  components: {
    searchbar: Autocomplete
  },

  data: () => ({
    search: '',
    param: '',
    searchResults: [],
    searchUsers: [],
    searchedPlaylist: {},
    searchPlaylistUrl: `${api.baseUrl}/playlists`,
    token: Cookies.get('token')

  }),
  watch: {
    $route() {
      this.reloadPage();
    }
  },
  methods: {
    async reloadPage() {
      this.search = this.$route.query.result;
      this.param = encodeURIComponent(this.$route.query.result);
      this.searchResults = await api.getSearchResults(this.param);
      this.searchUsers = await api.getSearchUsers(this.param);
      this.processResults();
    },
    processResults() {
      const arrayLength = this.searchResults.length;

      for (let i = 0; i < arrayLength; i += 1) {
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
      return json.filter(result => result.name.includes(name));
    },
    async addTrackPlaylist(track) {
      if (typeof this.searchedPlaylist.name !== 'undefined') {
        await api.addTrackPlaylist(this.searchedPlaylist.id, track).then(() => {
          this.searchedPlaylist.tracks.push(track);
          const toastContent = $(`<span>"${track.trackName}" has been added to "${this.searchedPlaylist.name}"</span>`);
          Materialize.toast(toastContent, 4000, 'green');
          $('.autocomplete-input').val('');
          this.searchedPlaylist = {};
        });
      }
    },
    async addAlbumPlaylist(album) {
      if (typeof this.searchedPlaylist.name !== 'undefined') {
        await api.getAlbumTracks(album.collectionId).then((albumTracks) => {
          const arrayLength = albumTracks.length;
          for (let i = 0; i < arrayLength; i += 1) {
            api.addTrackPlaylist(albumTracks[i].trackName);
            const toastContent = $(`<span>"${albumTracks[i].trackName}" has been added to "${this.searchedPlaylist.name}"</span>`);
            Materialize.toast(toastContent, 4000, 'green');
          }
        });
      }
    },
    async isMyFriend(friendEmail) {
      const token = await api.getTokenInfo();
      const loggedUser = await api.getProfile(token.id);
      loggedUser.following.forEach((follower) => {
        if (friendEmail === follower.email) {
          this.myFriendId = follower._id;
          return true;
        }
        return false;
      });
    },
    async getFriendId(friendEmail) {
      const users = await api.getUsers();
      let friendId;
      users.forEach((user) => {
        if (user.email === friendEmail) {
          friendId = user.id;
        }
      });
      return friendId;
    },
    async addFriend(friendEmail) {
      this.getFriendId(friendEmail).then(async (friendId) => {
        await api.followUser(friendId);
        router.push(`/profile/${friendId}`);
      });
    },
    async initialize() {
      this.search = this.$route.query.result;
      this.param = encodeURIComponent(this.$route.query.result);
      this.searchResults = await api.getSearchResults(this.param);
      this.searchUsers = await api.getSearchUsers(this.param);
      this.processResults();
    }
  },
  async created() {
    this.initialize();
  }
};
