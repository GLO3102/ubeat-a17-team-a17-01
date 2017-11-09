<template>
  <div>
    <input v-model="playlist.name" v-on:blur="modifyPlaylistName">
    <button v-on:click="deletePlaylist(playlist.id)">Delete</button>
    <router-link to="/"  tag="button">View</router-link>
  </div>
</template>

<style src="@/assets/css/playlist.css"></style>
<script type="text/javascript" src="@/assets/js/playlist.js"></script>

