<template>
  <div>
    <textarea v-model="playlist.name" v-on:blur="modifyPlaylistName"></textarea>
    <button v-on:click="deleteTask(playlist.id)">Delete</button>
  </div>
</template>

<style src="@/assets/css/playlist.css"></style>
<script type="text/javascript" src="@/assets/js/playlist.js"></script>

