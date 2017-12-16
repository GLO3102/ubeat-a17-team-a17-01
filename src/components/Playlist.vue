<template>
  <div class="container">
    <div>
      <input id="playlist-name" v-model="playlist.name" v-on:blur="modifyPlaylistName">
      <ul class="collection tracks-list">
        <p id="help-playlist">Your playlist is currently empty. Start by searching your favourite track !</p>
        <li class="collection-item avatar"
          v-for="track
          of
          playlist.tracks"
          v-bind:key="playlist.id"
          v-bind:playlist="playlist" >
          <img :src="track.artworkUrl60" alt="" class="circle">
          <span class="title track-title">{{track.trackName}}</span>
          <p>{{track.artistName}}</p>
          <p>{{track.collectionName}}</p>
          <div class="center secondary-content">
            <p class="track-time">{{displayTrackDuration(track.trackTimeMillis)}}</p>
            <span v-if="myPlaylist" v-on:click="deleteTrack(playlist.id, track.trackId)" class="delete-icon"><i class="material-icons">delete</i></span>
          </div>
        </li>
      </ul>
      <form>
        <div class="input-field inline">
          <searchbar
            :url="searchTrackUrl"
            anchor="trackName"
            label="artistName"
            :process="processJSON"
            :on-select="selectTrack"
            initValue=""
            :required="true"
            placeholder="Enter track name"
            :customHeaders="{ Authorization: token }">
          </searchbar>
        </div>
        <button type="submit" class="hide add-track-button btn-floating btn-medium waves-effect waves-light" v-on:click="addTrackPlaylist(playlist.id)"><i class="material-icons">playlist_add</i></button>
      </form>
      <p>
        <router-link to="/playlists/"  class="right waves-effect waves-light">Go back to my playlists</router-link>
      </p>
    </div>
  </div>
</template>

<style src="@/assets/css/playlist.css"></style>
<script type="text/javascript" src="@/assets/js/playlist.js"></script>

