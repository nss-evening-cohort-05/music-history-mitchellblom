var Songs = (function(oldSongs) {

    // var songContainer = document.getElementById("right");
    // console.log(songContainer);

    var songContainer = $("#right");

    var privateArrayOfSongs = [];
    var privateArrayOfSongs2 = [];
    var songsToWrite = "";
    var songsToWrite2 = "";

// Select element by Id: 			$("#right")
// Select element by Class: 		$(".movielist")
// Select element by Tag name: 		$("img")
// Select element by Attribute: 	$("input[value=’Horror’]")


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
            songsToWrite += `<div class="name"><i>${getNewSongArray[i].name}</i> `
            songsToWrite += `by the artist <i>${getNewSongArray[i].artist}</i> `
            songsToWrite += `on the album <i>${getNewSongArray[i].album}</i> </div>`
            songsToWrite += `<button class="deleteButton btn btn-default">Delete</button>`;
            songsToWrite += `</div>`;
        }
        songContainer.html(songsToWrite);
        songContainer.append(`<button id="loadMoreSongs" class="btn btn-default">Load More Songs</button>`);
    }

    oldSongs.writeNewSongToArray2 = function(getNewSongArray2) {
        songsToWrite2 = "";
        for (var i = 0; i < getNewSongArray2.length; i++) {
            songsToWrite2 += `<div class="songs">`;
            songsToWrite2 += `<div class="name"><i>${getNewSongArray2[i].name}</i> `
            songsToWrite2 += `by the artist <i>${getNewSongArray2[i].artist}</i> `
            songsToWrite2 += `on the album <i>${getNewSongArray2[i].album}</i> </div>`
            songsToWrite2 += `<button class="deleteButton btn btn-default">Delete</button>`;
            songsToWrite2 += `</div>`;
        }
        songContainer.html(songsToWrite);
        songContainer.append(songsToWrite2);
        songContainer.append(`<button id="loadMoreSongs" class="btn btn-default">Load More Songs</button>`);
        var loadMoreSongsButton = $("#loadMoreSongs");
        $("loadMoreSongsButton").addClass("disabled");
    }

    function deleteSong(e) {
        if (e.target.className === "deleteButton") {
            e.target.parentElement = "";
        };
    };

    return oldSongs;

})(Songs || {});