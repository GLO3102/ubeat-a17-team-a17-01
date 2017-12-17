<template>
  <div>

    <div class="container">
      <div class="section">
        <div class="divider"></div>
        <div class="section">
          <div class="card-panel hoverable">
            <h5>Register to Ubeat !</h5>
            <form v-on:submit="register">
              <input type="email" v-model="email" placeholder="Email" required>
              <input type="text" v-model="firstName" placeholder="First Name" required>
              <input type="text" v-model="lastName" placeholder="Last Name" required>
              <input type="password" v-model="password" placeholder="Password" required>
              <span>{{ message }}</span>
              <br>
              <router-link to="/login">I already have an account</router-link>
              <button><i class="material-icons right">description</i>Confirm</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="@/assets/css/home.css">
</style>
<script type="text/javascript" src="@/assets/js/register.js">
</script>
