<template>
  <div class="container">
    <div>
      <h5 >My playlists</h5>
      <textarea v-model="name" placeholder="Enter playlist name"></textarea>
      <button v-on:click="createPlaylist">Create</button>
      <playlist
        v-for="playlist
        of
        playlists"
        v-bind:key="playlist.id"
        v-bind:playlist="playlist"
        v-bind:deletePlaylist="deletePlaylist" />
    </div>
  </div>
</template>

<style src="@/assets/css/playlist.css"></style>
<script type="text/javascript" src="@/assets/js/playlists.js"></script>
