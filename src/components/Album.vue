<template>
  <div class="container">
    <div class="row playlist-information">
      <div class="playlist-sub-information">
        <h3>{{album.collectionName}}</h3>
        <h5>{{album.artistName}}</h5>
        <div class="playlist-description">
          <p>Genre: {{album.primaryGenreName}}</p>
          <p>{{album.trackCount}} songs</p>
          <p>Released: {{parseISOString(album.releaseDate)}}</p>
          <span>View in
            <a class="waves-effect waves-light" target="_blank" :href="album.collectionViewUrl">
              <img width="100" src="../assets/icons/itunes-logo.png" />
            </a>
          </span>
        </div>
      </div>
      <img class="responsive-img playlist-img" :src="album.artworkUrl100">
    </div>
    <div>
      <h5 >Song List</h5>
      <form>
      <ul class="collection tracks-list">
        <li class="collection-item avatar">
          <span class="title">Title</span>
          <p class="secondary-content track-time">Time</p>
        </li>
        <li class="collection-item avatar track" v-for="track
        of
        albumTracks">
          <p class="track-number">{{track.trackNumber}}</p>
          <span class="title">{{track.trackName}}</span>
          <button v-on:click="addAlbumPlaylist(track)" class="btn-floating playlist-add"><i class="material-icons">playlist_add</i></button>
          <audio controls="controls">
            Your browser does not support the <code>audio</code> element.
            <source :src="track.previewUrl" type="audio/wav">
          </audio>
          <p class="secondary-content track-time">{{displayTrackDuration(track.trackTimeMillis)}}</p>
        </li>
      </ul>
      <button type="submit" v-on:click="addAlbumPlaylist" class="btn playlist-addall waves-effect waves-light"><i class="material-icons">playlist_add_check</i>Add album to playlist</button>
        <searchbar
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
      </form>
    </div>
  </div>
</template>

<style src="@/assets/css/playlist.css"></style>
<script type="text/javascript" src="../assets/js/album.js"></script>
