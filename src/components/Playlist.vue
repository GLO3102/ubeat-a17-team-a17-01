<template>
  <div class="container">
    <div>
      <input v-model="playlist.name" v-on:blur="modifyPlaylistName">
      <div
        v-for="track
        of
        playlist.tracks"
        v-bind:key="playlist.id"
        v-bind:playlist="playlist"
        v-bind:deletePlaylist="deletePlaylist" >
        <button v-on:click="deleteTrack(playlist.id, track.id)">Delete</button>
      </div>

      <button v-on:click="addTrack(playlist.id)">Add track</button>

    </div>
  </div>
</template>

<style src="@/assets/css/playlist.css"></style>
<script type="text/javascript" src="@/assets/js/playlist.js"></script>

