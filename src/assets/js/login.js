/* eslint-disable import/extensions */

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
      loginURLSearchParams.append('password',this.password);
      const user = await auth.login(loginURLSearchParams);
      if (typeof user === 'undefined') {
        this.message = 'Authentication in has failed, please retry.';
      } else {
        return true;
      }
    }
  }
};

