var Songs = (function(oldSongs) {

    var addSongButton = document.getElementById("clickToAddSong");
    var addSongTitle = document.getElementById("addTitleField");
    var addSongArtist = document.getElementById("addArtistField");
    var addSongAlbum = document.getElementById("addAlbumField");
    var songContainer = document.getElementById("right");

    var privateArrayOfSongs = [];

    oldSongs.getNewSongArray = function(songsPassedFromSongIife) {
        privateArrayOfSongs.push(songsPassedFromSongIife)
        console.log(privateArrayOfSongs);
        Songs.writeNewSongToArray(privateArrayOfSongs);
        return privateArrayOfSongs;
    }

    oldSongs.writeNewSongToArray = function(getNewSongArray) {
        console.log(getNewSongArray.length);
        songsToWrite = "";
        for (var i = 0; i < getNewSongArray.length; i++) {
            songsToWrite += `<div class="songs">`;
            songsToWrite += `<div class="name">${getNewSongArray[i].name} `
            songsToWrite += `by the band ${getNewSongArray[i].artist} `
            songsToWrite += `on the album ${getNewSongArray[i].album} </div>`
            songsToWrite += `<button class="deleteButton btn btn-default">Delete</button>`;
            songsToWrite += `</div>`;
            // songsToWrite += `</div>`;
        }
        songContainer.innerHTML = songsToWrite;
    }

    function deleteSong(e) {
        if (e.target.className === "deleteButton") {
            e.target.parentElement = "";
        };
    };

    // oldSongs.makeDeleteListener = function() {
    // 	domDeleteListener();
    // }

    return oldSongs;

})(Songs || {});

////////////////////// ADDING SONGS FROM PSEUDO-FORM ////////////////////////////

// addSongButton.addEventListener("click", function(event) {
//     songs.push(addSongTitle.value + " | " + addSongArtist.value + " | " + addSongAlbum.value);
//     writeArray(songs);
// });