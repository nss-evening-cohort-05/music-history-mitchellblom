////////////////////// REFERENCES ////////////////////////////////////////////////////

var addSongButton = document.getElementById("clickToAddSong");
var addSongTitle = document.getElementById("addTitleField");
var addSongArtist = document.getElementById("addArtistField");
var addSongAlbum = document.getElementById("addAlbumField");
var songs = [];

////////////////////// STARTING ELEMENTS ///////////////////////////////////////////

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

////////////////////// ADDING SONGS FOR PART 2 ////////////////////////////////////

	// 1. Each student must add one song to the beginning and the end of the array.

songs.unshift("Atlantic - by Thrice on the album Vheissu");
songs.push("Clipping - by Mutemath on the album Armistice");

////////////////////// CLEAN SYMBOLS AND WRITE TO DOM ////////////////////////////

	// 2. Loop over the array and remove any words or characters that obviously don't belong.
	// 3. Students must find and replace the > character in each item with a - character.
	// 4. Must add each string to the DOM in index.html in the main content area.

function cleanAndWrite(array) {
    for (i = 0; i < array.length; i++) {
        array[i] = array[i].replace(">", "-")
        array[i] = array[i].replace("*", "");
        array[i] = array[i].replace("(", "");
        array[i] = array[i].replace("!", "");
        array[i] = array[i].replace("@", "");
        array[i] = array[i].replace("- by", "|");
        array[i] = array[i].replace("on the album", "|");
        document.getElementById("song" + i).innerHTML = array[i];
    }
};

cleanAndWrite(songs);

////////////////////// ADDING SONGS FROM PSEUDO-FORM ////////////////////////////

addSongButton.addEventListener("click", function(event) {
    songs.push(addSongTitle.value + " | " + addSongArtist.value + " | " + addSongAlbum.value);
    cleanAndWrite(songs);
});