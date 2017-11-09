<template>
  <div class="container">
    <div>
      <h5 >My playlists</h5>
      <input v-model="name" placeholder="Enter playlist name">
      <button v-on:click="createPlaylist">Create</button>
      <div
        v-for="playlist
        of
        playlists"
        v-bind:key="playlist.id"
        v-bind:playlist="playlist"
        v-bind:deletePlaylist="deletePlaylist" >
          <input v-model="playlist.name" v-on:blur="modifyPlaylistName(playlist.id)">
          <button v-on:click="deletePlaylist(playlist.id)">Delete</button>
          <router-link :to="/playlist/+playlist.id"  tag="button">View</router-link>
      </div>
    </div>
  </div>
</template>

<style src="@/assets/css/playlist.css"></style>
<script type="text/javascript" src="@/assets/js/playlists.js"></script>
