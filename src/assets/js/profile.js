/* eslint-disable import/extensions */

import * as api from './api.js';

export default {

  data: () => ({
    loggedUser: '',
    profile: '',
    playlists: [],
    myProfile: '',
    friends: [],
    myFriend: '',
    myFriendId: ''
  }),
  watch: {
    $route: () => {
      this.initialize();
    }
  },
  methods: {
    async initialize() {
      const token = await api.getTokenInfo();
      this.loggedUser = await api.getProfile(token.id);
      if (typeof this.$route.params.id === 'undefined') {
        this.myProfile = true;
        this.profile = this.loggedUser;
        this.playlists = await api.getPlaylists(this.loggedUser.email);
      } else {
        this.myProfile = false;
        this.profile = await api.getProfile(this.$route.params.id);
        this.playlists = await api.getPlaylists(this.profile.email);
      }
      this.isMyFriend();
      this.getFriendsList();
    },
    async deleteFriend(friendId) {
      this.profile = await api.deleteFriend(friendId);
      this.myFriend = false;
      this.myFriendId = '';
      this.initialize();
    },
    async isMyFriend() {
      this.myFriend = false;
      this.loggedUser.following.forEach((follower) => {
        if (this.profile.email === follower.email) {
          this.myFriend = true;
          this.myFriendId = follower._id;
        }
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
    async getFriendsList() {
      this.profile.following.forEach((friend) => {
        const friendWithId = friend;
        this.getFriendId(friend.email).then((friendId) => {
          friendWithId.id = friendId;
          this.friends.push(friendWithId);
        });
      });
    },
    async addFriend(friendEmail) {
      this.getFriendId(friendEmail).then( async (friendId) => {
        this.profile = await api.followUser(friendId);
      });
      this.myFriend = true;
      this.initialize();
    }
  },
  async created() {
    this.initialize();
  }
};

