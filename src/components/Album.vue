<template>
  <div class="container">
    <div class="row playlist-information">
      <div class="playlist-sub-information">
        <h3>{{albums.collectionName}}</h3>
        <h5>{{albums.artistName}}</h5>
        <div class="playlist-description">
          <p>Genre : {{albums.primaryGenreName}}</p>
          <p>Released : {{albums.releaseDate}}</p>
          <span>View in
            <a class="waves-effect waves-light" target="_blank" href="https://itunes.apple.com/us/album/bad/id559334659%22%3E
              <img width="100" src="../assets/icons/itunes-logo.png" />
            </a>
          </span>
          <p> {{albums.releaseDate}}</p>
        </div>
      </div>
      <router-link to="/album">
        <img width="62" v-bind:src="albums.artworkUrl100">
      </router-link>
    </div>
    <div>
      <h5 >Song List</h5>
      <ul class="collection with-header">
        <li class="collection-item avatar" v-for="track of albumsTracks">
          <router-link to="/album">
            <img v-bind:src="album.artworkUrl60" class="circle">
          </router-link>
          <span>{{track.trackName}}</span>
          <span>{{track.trackNumber}}</span>
          <span>{{track.trackDuration}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style src="@/assets/css/playlist.css"></style>
<script type="text/javascript" src="../assets/js/album.js"></script>
