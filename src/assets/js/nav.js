
import * as Cookies from 'js-cookie';
import * as api from './api';

$( window ).on('load', function(){
  $(".button-collapse").sideNav();
  $(".dropdown-button").dropdown();
});

export default {
  mounted() {
    $('.parallax').parallax();
  },

  methods: {
    async logout() {
      await api.logout();
      Cookies.remove('token');
      location.replace('http://localhost:8080/#/Connection');
    }
  }
};
