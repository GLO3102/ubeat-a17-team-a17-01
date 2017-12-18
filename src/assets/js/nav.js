
import * as Cookies from 'js-cookie';
import Autocomplete from 'vue2-autocomplete-js';
import * as api from './api';
import * as auth from './authentication';

$(window).on('load', () => {
  $('.button-collapse').sideNav();
  $('.dropdown-button').dropdown();
});

export default {
  components: {
    navsearchbar: Autocomplete
  },
  data: () => ({
    ownerEmail: Cookies.get('email'),
    searchUrl: `${api.baseUrl}/search/`,
    name: Cookies.get('name'),
    token: Cookies.get('token')
  }),
  mounted() {
    $('.parallax').parallax();
  },

  methods: {
    processJSON(json) {
      const result = json.results.slice(0, 5);
      const arrayLength = result.length;

      for (let i = 0; i < arrayLength; i += 1) {
        if (result[i].wrapperType === 'artist') {
          result[i].name = result[i].artistName;
        } else if (result[i].wrapperType === 'track') {
          result[i].name = result[i].trackName;
        } else {
          result[i].name = result[i].collectionName;
          result[i].wrapperType = 'album';
        }
      }
      return result;
    },
    searchElement() {
      const querySearch = document.getElementById('navsearch').value;
      this.$router.push({ path: '/search', query: { result: querySearch } });
    },

    selectPage(result) {
      if (result.wrapperType === 'artist') {
        this.$router.push({ path: `/artist/${result.artistId}` });
      } else {
        this.$router.push({ path: `/album/${result.collectionId}` });
      }
    },
    async logout() {
      await auth.logout();
    }
  }
};
