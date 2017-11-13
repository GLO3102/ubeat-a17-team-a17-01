<template>
  <div class="container">
      <h3>My playlists</h3>
       <form>
          <div class="input-field inline">
            <input v-model="name" placeholder="Enter playlist name">
          </div>
          <button type="submit" class="btn-floating btn-medium waves-effect waves-light " v-on:click="createPlaylist"><i class="material-icons">add</i></button>
      </form>
    <ul class="collection tracks-list">
      <li class="collection-item playlist-item track valign-wrapper"
          v-for="playlist
          of
          playlists"
          v-bind:key="playlist.id"
          v-bind:playlist="playlist"
          v-bind:deletePlaylist="deletePlaylist" >
        <i class="material-icons">queue_music</i>
        <div class="input-field inline">
          <input v-model="playlist.name" v-on:blur="modifyPlaylistName(playlist.id)">
        </div>
        <a v-on:click="deletePlaylist(playlist.id)" class="right btn-floating btn-medium waves-effect waves-light"><i class="material-icons">delete</i></a>
        <router-link :to="/playlist/+playlist.id"  class="right btn-floating btn-medium waves-effect waves-light" tag="button"><i class="material-icons">view_list</i></router-link>
      </li>
    </ul>
  </div>
</template>

<style src="@/assets/css/playlist.css"></style>
<script type="text/javascript" src="@/assets/js/playlists.js"></script>
