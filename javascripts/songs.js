var Songs = (function(oldSongs) {

var addSongButton = document.getElementById("clickToAddSong");
var addSongTitle = document.getElementById("addTitleField");
var addSongArtist = document.getElementById("addArtistField");
var addSongAlbum = document.getElementById("addAlbumField");
var songContainer = document.getElementById("right");

	// console.log(Songs.getData(data));

    var privateArrayOfSongs = [];

    oldSongs.getNewSongArray = function(songsPassedFromSongIife) {
    	privateArrayOfSongs = songsPassedFromSongIife;
    	// console.log(privateArrayOfSongs);
    	// songContainer.innerHTML = privateArrayOfSongs;
    	Songs.writeNewSongToArray(privateArrayOfSongs);
        return privateArrayOfSongs;
    }

    oldSongs.writeNewSongToArray = function(getNewSongArray) {
        console.log(getNewSongArray);
        
        // for (var i = 0; i < getNewSongArray.length; i++) {
        // 	console.log(i);
        // 	// writeArrayToDom(songToWrite);
        // }
    }

    return oldSongs;

})(Songs || {});

////////////////////// ADDING SONGS FROM PSEUDO-FORM ////////////////////////////

// addSongButton.addEventListener("click", function(event) {
//     songs.push(addSongTitle.value + " | " + addSongArtist.value + " | " + addSongAlbum.value);
//     writeArray(songs);
// });