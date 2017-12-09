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
              <h5>You need to be connected</h5>
              <div class="divider"></div>
              <div class="section">
                <span>{{ message }}</span>
                <br>
                <input type="text" v-model="message" placeholder="Username">
              </div>
          <span>{{ message }}</span>
          <br>
          <input type="text" v-model="message" placeholder="Password">
            <button v-on:click=""  ><i class="material-icons right">description</i>Register</button>
            <button v-on:click=""  ><i class="material-icons right">input</i>Connect</button>
        </div>
        </div>
      </div>
      </div>
    </div>
</template>

<style src="@/assets/css/home.css">
</style>
