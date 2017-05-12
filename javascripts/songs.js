// var Songs = (function(oldSongs) {

//     var songContainer = $("#right");

//     var privateArrayOfSongs = [];
//     var privateArrayOfSongs2 = [];
//     var songsToWrite = "";
//     var songsToWrite2 = "";

//     oldSongs.getNewSongArray = function(songsPassedFromSongIife) {
//         privateArrayOfSongs.push(songsPassedFromSongIife)
//         Songs.writeNewSongToArray(privateArrayOfSongs);
//         return privateArrayOfSongs;
//     }

//     oldSongs.getNewSongArray2 = function(songsPassedFromSongIife2) {
//         privateArrayOfSongs2.push(songsPassedFromSongIife2)
//         Songs.writeNewSongToArray2(privateArrayOfSongs2);
//         return privateArrayOfSongs2;
//     }

//     oldSongs.writeNewSongToArray = function(getNewSongArray) {
//         var array = getNewSongArray[0].songs
//         songsToWrite = "";
//         for (var i = 0; i < array.length; i++) {
//             songsToWrite += `<div class="songs">`;
//             songsToWrite += `<div class="name"><i>${array[i].name}</i> `
//             songsToWrite += `by the artist <i>${array[i].artist}</i> `
//             songsToWrite += `on the album <i>${array[i].album}</i> </div>`
//             songsToWrite += `<button class="deleteButton btn btn-default">Delete</button>`;
//             songsToWrite += `</div>`;
//         }
//         songContainer.html(songsToWrite);
//         songContainer.append(`<button id="loadMoreSongs" class="btn btn-default">Load More Songs</button>`);
//     }

//     oldSongs.writeNewSongToArray2 = function(getNewSongArray2) {
//         var array = getNewSongArray2[0].songs
//         songsToWrite2 = "";
//         for (var i = 0; i < array.length; i++) {
//             songsToWrite2 += `<div class="songs">`;
//             songsToWrite2 += `<div class="name"><i>${array[i].name}</i> `
//             songsToWrite2 += `by the artist <i>${array[i].artist}</i> `
//             songsToWrite2 += `on the album <i>${array[i].album}</i> </div>`
//             songsToWrite2 += `<button class="deleteButton btn btn-default">Delete</button>`;
//             songsToWrite2 += `</div>`;
//         }
//         songContainer.append(songsToWrite2);
//         $("#loadMoreSongs").remove();
//         songContainer.append(`<button id="loadMoreSongs" class="btn btn-default">Load More Songs</button>`);
//         $("#loadMoreSongs").addClass("disabled");
// }
//     function deleteSong(e) {
//         if (e.target.className === "deleteButton") {
//             e.target.parentElement = "";
//         };
//     };

//     return oldSongs;

// })(Songs || {});