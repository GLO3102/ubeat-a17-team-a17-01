import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Album from '@/components/Album';
import Artist from '@/components/Artist';
import Playlists from '@/components/Playlists';
import Playlist from '@/components/Playlist';
import Login from '@/components/Login';
import Register from '@/components/Register';
import Profile from '@/components/Profile';
import { requireAuth, requireNoAuth } from '../assets/js/authentication';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: requireAuth
    }, {
      path: '/artist/:id',
      name: 'Artist',
      component: Artist,
      beforeEnter: requireAuth
    }, {
      path: '/album/:id',
      name: 'Album',
      component: Album,
      beforeEnter: requireAuth
    }, {
      path: '/playlists',
      name: 'Playlists',
      component: Playlists,
      beforeEnter: requireAuth
    }, {
      path: '/playlist/:id',
      name: 'Playlist',
      component: Playlist,
      beforeEnter: requireAuth
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: requireNoAuth
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      beforeEnter: requireNoAuth
    }, {
      path: '/my-profile',
      name: 'MyProfile',
      component: Profile,
      beforeEnter: requireAuth
    }, {
      path: '/profile/:id',
      name: 'Profile',
      component: Profile,
      beforeEnter: requireAuth
    },
  ],
});
