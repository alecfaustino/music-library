const library = {
  tracks: { t01: { id: "t01",
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
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = (library) => {
       const playlists = Object.keys(library.playlists); // returns an array of playslist strings ["p01", "p02"] 
       playlists.forEach((playlistId) => { // basically for each value of the array => do this
              const playlist = library.playlists[playlistId]; // this dynamically passes each value of the array
              console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
       });
};

// printPlaylists(library);


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = (library) =>  {
       const tracksArr = Object.keys(library.tracks); // array of tracks t01, t02.. etc
       for (const track of tracksArr) { // loop through each track
              const trackInfo = library.tracks[track]; 
              console.log(`${trackInfo.id}: ${trackInfo.name} by ${trackInfo.artist} (${trackInfo.album})`);
       }
};

// printTracks(library);


// // prints a list of tracks for a given playlist, using the following format:
// // p01: Coding Music - 2 tracks
// // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = (playlistId) => {
       const playlistInfo = library.playlists[playlistId]; 
       console.log(`${playlistInfo.id}: ${playlistInfo.name} - ${playlistInfo.tracks.length} tracks`);
       for (const track of playlistInfo.tracks) { // track of the tracks array in the playlist
              const trackInfo = library.tracks[track];
              console.log(`${trackInfo.id}: ${trackInfo.name} by ${trackInfo.artist} (${trackInfo.album})`);
       }
}

// printPlaylist("p01");

// // adds an existing track to an existing playlist
// const addTrackToPlaylist = function(trackId, playlistId) { // input is the trackId and the playlist it's adding to
//        console.log(trackId, playlistId);
// }

// addTrackToPlaylist("t02", "p02");


// // generates a unique id
// // (already implemented: use this for addTrack and addPlaylist)
// const generateUid = function() {
//   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// }


// // adds a track to the library
// const addTrack = function(name, artist, album) {

// }


// // adds a playlist to the library
// const addPlaylist = function(name) {

// }


// // STRETCH:
// // given a query string string, prints a list of tracks
// // where the name, artist or album contains the query string (case insensitive)
// // tip: use "string".search("tri") 
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
// const printSearchResults = function(query) {

// }