var Songs = (function(oldSongs) {

var addSongButton = document.getElementById("clickToAddSong");
var addSongTitle = document.getElementById("addTitleField");
var addSongArtist = document.getElementById("addArtistField");
var addSongAlbum = document.getElementById("addAlbumField");
var songContainer = document.getElementById("right");

	// console.log(Songs.getData(data));

    var privateArrayOfSongs = [];

    oldSongs.testFunction = function(songsPassedFromSongIife) {
    	console.log("testFunction works:", songsPassedFromSongIife);
    }

    oldSongs.getNewSongArray = function() {
        return privateArrayOfSongs;
    }

    oldSongs.writeNewSongToArray = function(songToWrite) {
        writeArrayToDom(songToWrite);
    }

    return oldSongs;

})(Songs || {});

////////////////////// ADDING SONGS FROM PSEUDO-FORM ////////////////////////////

// addSongButton.addEventListener("click", function(event) {
//     songs.push(addSongTitle.value + " | " + addSongArtist.value + " | " + addSongAlbum.value);
//     writeArray(songs);
// });