////////////////////// REFERENCES ////////////////////////////////////////////////////

var addSongButton = document.getElementById("clickToAddSong");
var addSongTitle = document.getElementById("addTitleField");
var addSongArtist = document.getElementById("addArtistField");
var addSongAlbum = document.getElementById("addAlbumField");

////////////// IIFE ////////////////////////

var Songs = (function(oldSongs) {

    var arrayOfSongs = [];
    oldSongs.getNewSongArray = function() {
        return privateSongArray;
    }

    oldSongs.writeNewSongToArray = function(songToWrite) {
        arrayOfSongs.push(songToWrite);
    };

    return oldSongs;

})(Songs || {});



////////////////////// CLEAN SYMBOLS AND WRITE TO DOM ////////////////////////////

function writeArray(array) {
    for (i = 0; i < array.length; i++) {
        array[i] = array[i].replace("on the album", "|");
        document.getElementById("song" + i).innerHTML = array[i];
    }
};

// writeArray(songs);

////////////////////// ADDING SONGS FROM PSEUDO-FORM ////////////////////////////

addSongButton.addEventListener("click", function(event) {
    songs.push(addSongTitle.value + " | " + addSongArtist.value + " | " + addSongAlbum.value);
    writeArray(songs);
});