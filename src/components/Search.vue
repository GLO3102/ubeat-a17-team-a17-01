<template>
  <div class="container">
    <div class="row playlist-information">
      <div class="playlist-sub-information">
        <h3>Search results for : "{{this.search}}"</h3>
      </div>
    </div>
    <p>Choose playlist to add tracks or albums to :</p>
    <form>
      <searchbar
        id="searchPlaylist"
        :url="searchPlaylistUrl"
        anchor="name"
        :required="true"
        label="owner"
        :process="processJSON"
        :encodeParams="false"
        :on-select="selectPlaylist"
        initValue=""
        placeholder="Enter playlist name"
        :customHeaders="{ Authorization: token }">
      </searchbar>
      <ul class="collection tracks-list">
        <li class="collection-item avatar track" v-for="result
        of
        searchResults">
          <template v-if="result.track">
            <router-link v-bind:to="/album/ + result.collectionId">
              <img src="../assets/icons/track-icon.png" class="circle">
            </router-link>
            <span class="title">
                {{result.trackName}} by {{result.artistName}}
            </span>
            <button v-on:click="addTrackPlaylist(result)" class="btn-floating playlist-add"><i class="material-icons">playlist_add</i></button>
            <audio controls="controls">
              Your browser does not support the <code>audio</code> element.
              <source :src="result.previewUrl" type="audio/wav">
            </audio>
          </template>
          <template v-if="result.album">
            <router-link v-bind:to="/album/ + result.collectionId">
              <img v-bind:src="result.artworkUrl60" class="circle">
            </router-link>
            <span class="title">{{result.collectionName}}</span>
            <button v-on:click="addAlbumPlaylist(result)" class="btn-floating playlist-add"><i class="material-icons">playlist_add</i></button>
            <p>{{result.artistName}}</p>
          </template>
          <template v-if="result.artist">
            <router-link v-bind:to="/artist/ + result.artistId">
              <img src="../assets/icons/artist-icon.png" class="circle">
            </router-link>
            <span class="title">{{result.artistName}}</span>
            <p>Genre : {{result.primaryGenreName}}</p>
          </template>
        </li>
      </ul>
    </form>
    <h5>
      <p>
        Recherche d'utilisateurs :
      </p>
    </h5>
    <form>
      <ul class="collection tracks-list">
        <li class="collection-item avatar track" v-for="user
        of
        searchUsers">
          <span class="title">
            {{user.name}}
          </span>
          <p>
            {{user.email}}
          </p>
        </li>
      </ul>
    </form>
  </div>
</template>

<style src="@/assets/css/playlist.css"></style>
<script type="text/javascript" src="../assets/js/search.js"></script>
