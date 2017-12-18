/* eslint-disable import/extensions */

import * as Materialize from 'materialize-css';
import * as auth from './authentication';

export default {

  data: () => ({
    email: '',
    message: '',
    password: '',
  }),

  methods: {
    async login() {
      const loginURLSearchParams = new URLSearchParams();
      loginURLSearchParams.append('email', this.email);
      loginURLSearchParams.append('password', this.password);
      await auth.login(loginURLSearchParams).then((user) => {
        if (typeof user.token === 'undefined') {
          const toastContent = $(`<span>${user}</span>`);
          Materialize.toast(toastContent, 4000, 'red');
        }
      });
    }
  },
  mounted() {
    $('.parallax').parallax();
  },
};

