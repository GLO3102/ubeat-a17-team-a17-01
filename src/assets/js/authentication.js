import * as Cookies from 'js-cookie';
import * as api from './api';

const email = 'userteam1@team1.com';
const password = 'userTeam1';

export default async function login() {
  const loginURLSearchParams = new URLSearchParams();
  loginURLSearchParams.append('email', email);
  loginURLSearchParams.append('password', password);
  const token = await api.login(loginURLSearchParams);
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + (60 * 60 * 1000));
  Cookies.set('token', token, { expires: expirationDate });
  return Cookies.get('token');
}

