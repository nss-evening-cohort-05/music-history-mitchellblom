var Songs = (function(oldSongs) {

    var addSongButton = document.getElementById("clickToAddSong");
    var addSongTitle = document.getElementById("addTitleField");
    var addSongArtist = document.getElementById("addArtistField");
    var addSongAlbum = document.getElementById("addAlbumField");
    var songContainer = document.getElementById("right");

    var privateArrayOfSongs = [];
    var privateArrayOfSongs2 = [];
    var songsToWrite = "";
    var songsToWrite2 = "";


    oldSongs.getNewSongArray = function(songsPassedFromSongIife) {
        privateArrayOfSongs.push(songsPassedFromSongIife)
        Songs.writeNewSongToArray(privateArrayOfSongs);
        return privateArrayOfSongs;
    }

    oldSongs.getNewSongArray2 = function(songsPassedFromSongIife2) {
        privateArrayOfSongs2.push(songsPassedFromSongIife2)
        Songs.writeNewSongToArray2(privateArrayOfSongs2);
        return privateArrayOfSongs2;
    }

    oldSongs.writeNewSongToArray = function(getNewSongArray) {
        songsToWrite = "";
        for (var i = 0; i < getNewSongArray.length; i++) {
            songsToWrite += `<div class="songs">`;
            songsToWrite += `<div class="name">${getNewSongArray[i].name} `
            songsToWrite += `by the band ${getNewSongArray[i].artist} `
            songsToWrite += `on the album ${getNewSongArray[i].album} </div>`
            songsToWrite += `<button class="deleteButton btn btn-default">Delete</button>`;
            songsToWrite += `</div>`;
        }
        songContainer.innerHTML = songsToWrite;
        songContainer.innerHTML += `<button id="loadMoreSongs" class="btn btn-default">Load More Songs</button>`;
    }

    oldSongs.writeNewSongToArray2 = function(getNewSongArray2) {
        songsToWrite2 = "";
        for (var i = 0; i < getNewSongArray2.length; i++) {
            songsToWrite2 += `<div class="songs">`;
            songsToWrite2 += `<div class="name">${getNewSongArray2[i].name} `
            songsToWrite2 += `by the band ${getNewSongArray2[i].artist} `
            songsToWrite2 += `on the album ${getNewSongArray2[i].album} </div>`
            songsToWrite2 += `<button class="deleteButton btn btn-default">Delete</button>`;
            songsToWrite2 += `</div>`;
        }
        songContainer.innerHTML = songsToWrite;
        songContainer.innerHTML += songsToWrite2;
        songContainer.innerHTML += `<button id="loadMoreSongs" class="btn btn-default">Load More Songs</button>`;
        var loadMoreSongsButton = document.getElementById("loadMoreSongs");
        loadMoreSongsButton.classList.add("disabled"); 
    }

    function deleteSong(e) {
        if (e.target.className === "deleteButton") {
            e.target.parentElement = "";
        };
    };

    return oldSongs;

})(Songs || {});