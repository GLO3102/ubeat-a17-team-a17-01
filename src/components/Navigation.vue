<template>

  <nav class="nav-extended">

    <div class="nav-wrapper">

      <router-link to="/" class="brand-logo left hide-on-med-and-down">UBeat</router-link>
      <router-link to="/" class="brand-logo hide-on-med-and-up">UBeat</router-link>
      <a href="#" data-activates="mobile-menu" class="button-collapse hide-on-med-and-up"><i class="material-icons">menu</i></a>

      <ul id="nav-mobile" class="right hide-on-small-only">
        <li class="hide-on-med-and-down">
          <form>
            <navsearchbar
              :url="searchUrl"
              anchor="name"
              label="wrapperType"
              :process="processJSON"
              :on-select="selectPage"
              initValue=""
              :required="true"
              id="navsearch"
              placeholder="Enter track name"
              :customHeaders="{ Authorization: token }">
            </navsearchbar>
          </form>
        </li>
        <li>
          <button id="search-button" class="waves-effect waves-light btn" v-on:click="searchElement()">Search</button>
        </li>
        <li>
        <router-link to="/"><i class="material-icons left">home</i>Home</router-link>
        </li>
        <li>
        <router-link to="/album/559334659"><i class="material-icons left">album</i>Album</router-link>
        </li>
        <li>
        <router-link to="/artist/32940"><i class="material-icons left">music_note</i>Artist</router-link>
        </li>
        <li>
          <router-link to="/playlists"><i class="material-icons left">library_music</i>Playlists</router-link>
        </li>
        <li>
          <router-link to="/my-profile"><i class="material-icons left">account_circle</i>{{name}}</router-link>
        </li>
        <li>
          <a class="dropdown-button" href="#!" data-activates="dropdown-account-settings"><i class="material-icons right">arrow_drop_down</i>
          </a>
        </li>

        <ul id="dropdown-account-settings" class="dropdown-content">
          <li>
            <router-link to="/my-profile"><i class="material-icons left">account_box</i>Settings</router-link>
          </li>
          <li>
            <button v-on:click="logout()" ><i class="material-icons left">exit_to_app</i>Logout</button>
          </li>
        </ul>

      </ul>

      <ul class="side-nav" id="mobile-menu">
        <li class="user-badge">
          <router-link to=""><i class="material-icons left">account_circle</i>{{name}}</router-link>
        </li>
        <li>
          <router-link to="/"><i class="material-icons left">home</i>Home</router-link>
        </li>
        <li>
          <router-link to="/album"><i class="material-icons left">album</i>Album</router-link>
        </li>
        <li>
          <router-link to="/artist"><i class="material-icons left">music_note</i>Artist</router-link>
        </li>
        <li>
          <router-link to="/playlists"><i class="material-icons left">library_music</i>Playlists</router-link>
        </li>
        <li>
          <router-link to=""><i class="material-icons left">account_box</i>Settings</router-link>
        </li>
        <li>
          <router-link to=""><i class="material-icons left">exit_to_app</i>Logout</router-link>
        </li>
      </ul>

    </div>

    <div class="nav-wrapper hide-on-large-only">
      <div id="searchbar">
        <form>
          <div class="input-field">
            <input id="search" type="search" required>
            <label class="label-icon" for="search"><i class="material-icons">search</i></label>
            <i class="material-icons">close</i>
          </div>
        </form>
      </div>
    </div>

  </nav>

</template>


<style src="@/assets/css/nav.css">
</style>
<script type="text/javascript" src="@/assets/js/nav.js">
</script>
