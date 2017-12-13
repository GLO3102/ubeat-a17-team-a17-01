/* eslint-disable import/extensions */

import * as auth from './authentication.js';


export default {

  data: () => ({
    email: '',
    firstName: '',
    lastName: '',
    message: '',
    password: '',
  }),

  methods: {

    async register() {
      const registerURLSearchParams = new URLSearchParams();
      registerURLSearchParams.append('email', this.email);
      registerURLSearchParams.append('name', this.firstName + ' ' + this.lastName);
      registerURLSearchParams.append('password',this.password);
      const newUser = await auth.register(registerURLSearchParams);
      if (typeof newUser === 'undefined') {
        this.message = 'Registration has failed, please retry.'
      }
      else
        this.message = 'You\'have successfully registered. You can log in now.'
    }
  }

};

