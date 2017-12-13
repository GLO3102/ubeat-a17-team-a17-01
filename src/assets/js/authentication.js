import Cookies from 'js-cookie';
import router from '../../router/index';
import * as api from './api';

export function isLoggedIn() {
  const token = Cookies.get('token');
  return !!token;
}

export function requireAuth(to, from, next) {
  if (!isLoggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    });
  } else {
    next();
  }
}

export function requireNoAuth(to, from, next) {
  if (isLoggedIn()) {
    next({
      path: '/',
      query: { redirect: to.fullPath }
    });
  } else {
    next();
  }
}

export async function login(loginURLSearchParams) {
  const user = await api.login(loginURLSearchParams);
  if (typeof user !== 'undefined') {
    Cookies.set('token', user.token, { expires: 365 });
    Cookies.set('email', user.email, { expires: 365 });
    Cookies.set('name', user.name, { expires: 365 });
    router.go('/home');
  }
  return user;
}

export async function register(registerURLSearchParams) {
  return api.register(registerURLSearchParams);
}


export async function logout() {
  await api.logout();
  Cookies.remove('token');
  Cookies.remove('email');
  Cookies.remove('name');
  router.go('/login');
}
