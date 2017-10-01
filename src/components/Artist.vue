<template>
    <div class="container">
      <div class="row playlist-information">
        <div class="playlist-sub-information">
          <h3>Michael Jackson</h3>
          <div class="playlist-description">
            <p>Full Name : Michael Joseph Jackson</p>
            <p>Genre : Pop</p>
            <span>View in
            <a class="waves-effect waves-light" target="_blank" href="https://itunes.apple.com/ca/artist/michael-jackson/id32940">
              <img width="62" src="../assets/icons/itunes-logo.png" />
            </a>
          </span>
          </div>
        </div>
        <img class="responsive-img playlist-img" src="../assets/img/michael-jackson.jpg">
      </div>

      <div>
        <h5 >Album List</h5>
        <ul class="collection with-header">
          <li class="collection-item"><router-link to="">Got to Be There (1972)</router-link></li>
          <li class="collection-item"><router-link to="">Ben (1972)</router-link></li>
          <li class="collection-item"><router-link to="">Music and Me (1973)</router-link></li>
          <li class="collection-item"><router-link to="">forever, Michael (1975)</router-link></li>
          <li class="collection-item"><router-link to="">Off the Wall (1979)</router-link></li>
          <li class="collection-item"><router-link to="">Thriller (1982)</router-link></li>
          <li class="collection-item"><router-link to="/album">Bad (1987)</router-link></li>
          <li class="collection-item"><router-link to="">Dangerous (1991)</router-link></li>
          <li class="collection-item"><router-link to="">HIStory – Past, Present, and Future: Book 1 (1995)</router-link></li>
          <li class="collection-item"><router-link to="">Invincible</router-link></li>
          <li class="collection-item"><router-link to="">Michael (2010)</router-link></li>
          <li class="collection-item"><router-link to="">Xscape (2014)</router-link></li>
        </ul>
      </div>
    </div>
</template>

<style src="@/assets/css/playlist.css"></style>
