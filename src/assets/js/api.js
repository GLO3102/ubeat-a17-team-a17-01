/* eslint-disable import/prefer-default-export,no-console */

// temporary unsecure for dev without token

import * as Cookies from 'js-cookie';

export const baseUrl = 'https://ubeat.herokuapp.com';

// AUTHENTICATION SECTION //////////////////////////////////////////////////////////////////

export const login = loginURLSearchParams => fetch(`${baseUrl}/login`, {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*'
  },
  method: 'POST',
  body: loginURLSearchParams
})
  .then(response => response.json())
  .then(json => json)
  .catch(() => console.error('unable to log in')
  );

export const logout = () => fetch(`${baseUrl}/login`, {
  headers: {
    Authorization: Cookies.get('token')
  },
  method: 'GET'
})
  .catch(() => {
    console.error('unable to logout');
  });

export const register = registerURLSearchParams => fetch('https://ubeat.herokuapp.com/signup', {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*'
  },
  method: 'POST',
  body: registerURLSearchParams
})
  .then(response => response.json())
  .then(json => json)
  .catch(() => {
    console.error('unable to register');
  });


// ARTIST SECTION /////////////////////////////////////////////////////////////////////////

// List details of artist based on ID
export const getArtist = artistID => fetch(`${baseUrl}/artists/${artistID}`, {
  headers: {
    Authorization: Cookies.get('token'),
    'Access-Control-Allow-Origin': '*'
  }
})
    .then(response => response.json())
    .then(json => json.results[0])
    .catch(() => {
      console.error('unable to fetch artist');
    });

// List all albums of  an artist based on ID
export const getArtistAlbums = artistID => fetch(`${baseUrl}/artists/${artistID}/albums`, {
  headers: {
    Authorization: Cookies.get('token'),
    'Access-Control-Allow-Origin': '*'
  }
})
  .then(response => response.json())
  .then(json => json.results)
  .catch(() => {
    console.error('unable to fetch albums for the artist');
  });

// PLAYLIST SECTION ////////////////////////////////////////////////////////////////////////

// Create a playlist, returns object with parameters of the playlist
export const createPlaylist = playlistName => fetch(`${baseUrl}/playlists`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token')
  },
  body: JSON.stringify({
    name: playlistName
  })
})
    .then(response => response.json())
    .then(json => json)
    .catch(() => {
      console.error('unable to create playlist');
    });

// Get a playlist, returns object with parameters of playlist
export const getPlaylist = playlistId => fetch(`${baseUrl}/playlists/${playlistId}`, {
  headers: {
    Authorization: Cookies.get('token')
  }
})
  .then(response => response.json())
  .then(json => json)
  .catch(() => {
    console.error('unable to fetch playlist');
  });

// Get a playlists for one user, returns array of playlists
export const getPlaylists = ownerEmail => fetch(`${baseUrl}/playlists`, {
  headers: {
    Authorization: Cookies.get('token')
  }
})
  .then(response => response.json())
  .then((json) => {
    const playlists = [];
    json.forEach((playlist) => {
      const owner = playlist.owner;
      if (typeof owner !== 'undefined') {
        if (owner.email === ownerEmail) {
          playlists.push(playlist);
        }
      }
    });
    return playlists;
  })
  .catch(() => {
    console.error('unable to fetch playlist');
  });

// Modify a playlist, returns object with new name and id of playlist
export const modifyPlaylistName = (playlistId, playlistName, ownerEmail) => fetch(`${baseUrl}/playlists/${playlistId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token')
  },
  body: JSON.stringify({
    name: playlistName,
    owner: ownerEmail
  })
})
  .then(response => response.json())
  .then(playlist =>
    playlist)
  .catch(() => {
    console.error('unable to modify playlist');
  });

// Adds a track to a playlist
export const addTrackPlaylist = (playlistId, trackObject) => fetch(`${baseUrl}/playlists/${playlistId}/tracks`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: Cookies.get('token')
  },
  body: JSON.stringify(
    trackObject
  )
})
  .then(response => response.json())
  .then(playlist =>
    playlist)
  .catch(() => {
    console.error('unable to add the track to the playlist');
  });

// Delete track from playlist based on track id
export const deleteTrackPlaylist = (playlistId, trackId) => fetch(`${baseUrl}/playlists/${playlistId}/tracks/${trackId}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token')
  }
})
  .then(response => response.json())
  .then(playlist =>
    playlist)
  .catch(() => {
    console.error('unable to delete the track from the playlist');
  });

// Delete the playlist based on id
export const deletePlaylist = playlistId => fetch(`${baseUrl}/playlists/${playlistId}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token')
  }
})
  .then(response => response.json())
  .then(playlist =>
    playlist)
  .catch(() => {
    console.error('unable to delete the playlist');
  });

// ALBUM SECTION ////////////////////////////////////////////////////////////////////////////

// get album details based on id (collectionId)
export const getAlbum = albumId => fetch(`${baseUrl}/albums/${albumId}`, {
  headers: {
    Authorization: Cookies.get('token')
  }
})
  .then(response => response.json())
  .then(json => json.results[0])
  .catch(() => {
    console.error('unable to fetch album');
  });

// get the tracks of an album based on id (collectionId)
export const getAlbumTracks = albumId => fetch(`${baseUrl}/albums/${albumId}/tracks`, {
  headers: {
    Authorization: Cookies.get('token')
  }
})
  .then(response => response.json())
  .then(json => json.results)
  .catch(() => {
    console.error('unable to fetch album tracks');
  });

// SEARCH SECTION //////////////////////////////////////////////////////////////////////////

// search based on query parameters
export const getSearchResults = parameter => fetch(`${baseUrl}/search?q=${parameter}&limit=25`, {
  headers: {
    Authorization: Cookies.get('token')
  }
})
  .then(response => response.json())
  .then(json => json.results)
  .catch(() => {
    console.error('unable to fetch album tracks');
  });
