<template>
  <div>
    <div id="index-banner" class="parallax-container">
      <div class="section no-pad-bot">
        <div class="container">
          <br><br>
          <h1 class="header center">UBeat</h1>
          <div class="row center">
            <h5 class="header col s12 light">A modern site for creating and sharing your favorite playlists</h5>
          </div>
          <br><br>

        </div>
      </div>
      <div class="parallax"><img src="../assets/img/home-picture.jpg" alt="home background"></div>
    </div>

    <div class="container">
      <div class="section">
        <div class="divider"></div>
        <div class="section">
          <div class="card-panel hoverable">
            <div class="card-image">
              <h5>Discover the brillant Michael Jackson in our Artist Page</h5>
              <div class="divider"></div>
              <div class="section">
                <h6>Today we are focus on a legend: Michael Jackson !
                </h6>
              </div>
              <p>
                You can find information
                <router-link to="/artist/32940">here</router-link>.
              </p>
            </div>
          </div>
          <div class="section">
            <div class="card-panel hoverable">
              <div class="card-image">
                <h5>New feature on the website: album playlist are available</h5>
                <div class="divider"></div>
                <div class="section">
                  <h6>We have a surprize for you, album playlist feature is now working
                  </h6>
                </div>
                <p>
                  Test our new feature
                  <router-link to="/album">here</router-link>.
                </p>
              </div>
            </div>
          </div>
          <div class="section">
            <div class="card-panel hoverable">
              <div class="card-image">
                <h5>Possibility to create your own Playlist !</h5>
                <div class="divider"></div>
                <p>
                  Create a playlist
                  <router-link to="/playlists">here</router-link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="@/assets/css/home.css">
</style>
<script type="text/javascript" src="@/assets/js/home.js">
</script>
