/* eslint-disable import/extensions */

import * as Materialize from 'materialize-css';
import router from '../../router/index';
import * as auth from './authentication.js';

export default {

  data: () => ({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  }),

  methods: {

    async register() {
      const registerURLSearchParams = new URLSearchParams();
      registerURLSearchParams.append('email', this.email);
      registerURLSearchParams.append('name', `${this.firstName} ${this.lastName}`);
      registerURLSearchParams.append('password', this.password);
      await auth.register(registerURLSearchParams).then((newUser) => {
        if (typeof newUser.name === 'undefined') {
          const toastContent = $(`<span>${newUser}</span>`);
          Materialize.toast(toastContent, 4000, 'red');
        } else {
          const toastContent = $('<span>You have successfully registered. You can log in now.</span>');
          Materialize.toast(toastContent, 3000, 'green');
          setTimeout(() => {
            router.push('/login');
          }, 3000);
        }
      });
    }
  }

};

