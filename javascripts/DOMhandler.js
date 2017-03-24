function writeArrayToDom() {
    var arrayofSongs = SongIife.getNewSongArray();
    var domString = "";
    for (var i = 0; i < arrayOfSongs.length; i++) {
        domString += `<div class="">`;
        domString += `<p>${arrayOfSongs[i]}</p>`;
        domString += `<button class="deleteButton btn btn-default">Delete</button>`;
        domString += `</button></div>`;
    }
    messageBoard.innerHTML = domString;
};

function writeNewSongToDom() {
    messageBoard.innerHTML = SongIife.getNewSongArray();
};