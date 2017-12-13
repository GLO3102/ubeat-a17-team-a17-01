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
          <div class="section">
            <div class="card-panel hoverable">
              <h5>Sign in to Ubeat !</h5>
              <form>
                <input type="email" v-model="email" placeholder="Email" required>
                <input type="password" v-model="password" placeholder="Password" required>
                <span> {{message}} </span>
                <br/>
                <router-link to="/register">Register</router-link>
                <button type="submit" v-on:click="login"><i class="material-icons right">input</i>Log in</button>
              </form>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="@/assets/css/home.css">
</style>
<script type="text/javascript" src="@/assets/js/login.js">
</script>
