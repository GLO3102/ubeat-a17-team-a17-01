<template>
    <div class="container">
      <div class="row playlist-information">
        <div class="playlist-sub-information">
          <h3>{{artist.artistName}}</h3>
          <div class="playlist-description">
            <p>Genre : {{artist.primaryGenreName}}</p>
            <span>View in
              <a class="waves-effect waves-light" target="_blank" v-bind:href="artist.artistLinkUrl">
                <img width="62" src="../assets/icons/itunes-logo.png" />
              </a>
            </span>
          </div>
        </div>
        <img class="responsive-img playlist-img" :src="artistImage">
      </div>

      <div>
        <h5 >Album List</h5>
        <ul class="collection with-header">
          <li class="collection-item avatar" v-for="album
          of
          albumList">
            <router-link v-bind:to="/album/ + album.collectionId">
              <img v-bind:src="album.artworkUrl60" class="circle">
              <span class="title">{{album.collectionName}}</span>
            </router-link>
            <p>{{album.releaseDate.substring(0,4)}}</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<style src="@/assets/css/playlist.css"></style>
<script type="text/javascript" src="../assets/js/artist.js"></script>
