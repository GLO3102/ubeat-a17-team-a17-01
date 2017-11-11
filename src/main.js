// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';
import 'vue2-autocomplete-js/dist/style/vue2-autocomplete.css';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }

});
