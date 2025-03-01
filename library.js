const library = {
  tracks: { t01: {
    id: "t01",
    name: "Code Monkey",
    artist: "Jonathan Coulton",
    album: "Thing a Week Three" },
  t02: { id: "t02",
    name: "Model View Controller",
    artist: "James Dempsey",
    album: "WWDC 2003"},
  t03: { id: "t03",
    name: "Four Thirty-Three",
    artist: "John Cage",
    album: "Woodstock 1952"}
  },
  playlists: { p01: { id: "p01",
    name: "Coding Music",
    tracks: ["t01", "t02"]
  },
  p02: { id: "p02",
    name: "Other Playlist",
    tracks: ["t03"]
  }
  },
  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks
  printPlaylists: function() {
    const playlists = Object.keys(this.playlists); // returns an array of playslist strings ["p01", "p02"]
    playlists.forEach((playlistId) => { // basically for each value of the array => do this
      const playlist = this.playlists[playlistId]; // this dynamically passes each value of the array
      console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    });
  },
  // prints a list of all tracks, using the following format:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)
  printTracks: function() {
    const tracksArr = Object.keys(this.tracks); // array of tracks t01, t02.. etc
    for (const track of tracksArr) { // loop through each track
      const trackInfo = this.tracks[track];
      console.log(`${trackInfo.id}: ${trackInfo.name} by ${trackInfo.artist} (${trackInfo.album})`);
    }
  },
  // prints a list of tracks for a given playlist, using the following format:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  printPlaylist: function(playlistId) {
    const playlistInfo = this.playlists[playlistId];
    console.log(`${playlistInfo.id}: ${playlistInfo.name} - ${playlistInfo.tracks.length} tracks`);
    for (const track of playlistInfo.tracks) { // track of the tracks array in the playlist
      const trackInfo = this.tracks[track];
      console.log(`${trackInfo.id}: ${trackInfo.name} by ${trackInfo.artist} (${trackInfo.album})`);
    }
  },
  // adds an existing track to an existing playlist
  addTrackToPlaylist: function(trackId, playlistId) { // input is the trackId and the playlist it's adding to
    //push the trackId to library.playists.playlistId.tracks
    const playlistTracksArr = this.playlists[playlistId].tracks; // is the array of the current tracks
    playlistTracksArr.push(trackId);
  },

  // generates a unique id
  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); // a random string
  },
  // adds a track to the library
  // Takes in a name of the track, the artist and the album name
  addTrack: function(name, artist, album) {
    const accessTracks = this.tracks;
    //create the new trackId
    const newTrackId = this.generateUid();
    // the new track object
    const newTrackInfo = {
      id: newTrackId,
      name: name,
      artist: artist,
      album: album
    };
    accessTracks[newTrackId] = newTrackInfo;
  },
  // // adds a playlist to the library
  addPlaylist: function(name) {
    const accessPlaylists = this.playlists;
    const newPlaylistId = this.generateUid();
    const newPlaylistInfo = {
      id: newPlaylistId,
      name: name,
      tracks: [],
    };
    accessPlaylists[newPlaylistId] = newPlaylistInfo;
  }
};

// library.printPlaylists();
// library.printTracks();
// library.printPlaylist("p01");
// library.printPlaylist("p02")
// console.log( "Original ----");
// library.addTrackToPlaylist("t02", "p02");
// library.printPlaylist("p02");
// console.log("After");
// console.log("@@@@@@@@@@@@@@@@");
// console.log(library.playlists.p02.tracks); // the original library has changed
// library.addTrack("Test", "TestArtist", "TestAlbum");
// library.printTracks();
// library.addPlaylist("New Playlist");
// library.printPlaylists();


// // STRETCH:
// // given a query string string, prints a list of tracks
// // where the name, artist or album contains the query string (case insensitive)
// // tip: use "string".search("tri")
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
// const printSearchResults = function(query) {

// }