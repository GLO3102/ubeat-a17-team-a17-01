/* eslint-disable import/extensions */
import Extrator from 'html-extractor';
import * as api from './api.js';


export default {

  data: () => ({
    artist: '',
    artistImage: '',
    albumList: [],
  }),
  watch: {
    $route() {
      this.reloadPage();
    }
  },
  methods: {
    async reloadPage() {
      this.artist = await api.getArtist(this.$route.params.id);
      const artistPage = await api.getArtistPage(this.$route.params.id);
      this.albumList = await api.getArtistAlbums(this.$route.params.id);
      const myExtrator = new Extrator();
      myExtrator.extract(artistPage, (err, data) => {
        if (err) {
          throw (err);
        } else {
          this.artistImage = data.meta['twitter:image'];
        }
      });
    }
  },

  async created() {
    this.artist = await api.getArtist(this.$route.params.id);
    const artistPage = await api.getArtistPage(this.$route.params.id);
    const myExtrator = new Extrator();
    myExtrator.extract(artistPage, (err, data) => {
      if (err) {
        throw (err);
      } else {
        this.artistImage = data.meta['twitter:image'];
      }
    });
    this.albumList = await api.getArtistAlbums(this.$route.params.id);
  }
};

