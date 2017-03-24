function writeArrayToDom() {
    var arrayofSongs = Songs.privateArrayOfSongs();
    var domString = "";
    for (var i = 0; i < arrayOfSongs.length; i++) {
        domString += `<div class="">`;
        domString += `<p>${arrayOfSongs[i]}</p>`;
        domString += `<button class="deleteButton btn btn-default">Delete</button>`;
        domString += `</button></div>`;
    }
    songContainer.innerHTML = domString;
};

function writeNewSongToDom() {
    songContainer.innerHTML = SongIife.getNewSongArray();
};