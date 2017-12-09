import * as Cookies from 'js-cookie';
import * as api from './api';

export default {
  mounted() {
    $('.parallax').parallax();
  },

  methods: {
    async logout() {
      await api.logout();
      Cookies.remove('token');
      alert('test');
    }
  }
};

