/* eslint-disable import/prefer-default-export,no-console */

// temporary unsecure for dev without token
const baseUrl = 'http://ubeat.herokuapp.com/unsecure';


// List details of artist based on ID
export const getArtist = artistID => fetch(`${baseUrl}/artists/${artistID}`)
    .then(response => response.json())
    .then(json => json.results[0])
    .catch(() => {
      console.error('unable to fetch artist');
    });

// List all albums of  an artist based on ID
export const getArtistAlbums = artistID => fetch(`${baseUrl}/artists/${artistID}/albums`)
  .then(response => response.json())
  .then(json => json.results)
  .catch(() => {
    console.error('unable to fetch albums for the artist');
  });
