<template>
  <div class="container">
    <div class="row">
      <h3 class="col s12" v-if="myProfile">My profile</h3>
      <h3 class="col s12" v-else>Profile
        <router-link :to="/profile/+profile.id">
          <a v-if="myFriend" v-on:click="deleteFriend(myFriendId)" class="waves-effect waves-light btn red right">Unfollow</a>
          <a class="waves-effect waves-light btn red right" v-on:click="addFriend(profile.email)" v-else>Follow</a>
        </router-link>
      </h3>
    </div>
    <div class="divider"></div>
    <div class="section">
      <h5>Personal informations</h5>
      <ul class="collection tracks-list">
        <li class="collection-item playlist-item track valign-wrapper" title="Username">
          <i class="material-icons">account_circle</i>
          <p class="input-field inline">{{ profile.name }}</p>
        </li>
        <li class="collection-item playlist-item track valign-wrapper" title="Email">
          <i class="material-icons">mail_outline</i>
          <p class="input-field inline">{{ profile.email }}</p>
        </li>
      </ul>
    </div>
    <div class="divider"></div>
    <div class="section">
      <h5>Playlists</h5>
      <ul class="collection tracks-list">
        <li class="collection-item playlist-item track valign-wrapper"
            v-for="playlist
            of
            playlists"
            v-bind:key="playlist.id"
            v-bind:playlist="playlist">
          <i class="material-icons">queue_music</i>
          <p class="input-field inline">{{ playlist.name }}</p>
          <router-link :to="/playlist/+playlist.id"  class="right btn-floating btn-medium waves-effect waves-light" tag="button"><i class="material-icons">view_list</i></router-link>
        </li>
      </ul>
    </div>
    <div class="divider"></div>
    <div class="section">
      <h5>Friends</h5>
      <ul class="collection tracks-list">
        <li class="collection-item playlist-item track valign-wrapper row"
            v-for="friend
          of
          friends"
            v-bind:key="friend._id">
          <p class="col s12 inline">
            <i class="material-icons left">person</i>
            <router-link :to="/profile/+friend.id" class="black-text left">{{ friend.name }}</router-link>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<style src="@/assets/css/playlist.css"></style>
<script type="text/javascript" src="../assets/js/profile.js"></script>

