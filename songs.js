var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

console.log("original array: ", songs);

// 1. Each student must add one song to the beginning and the end of the array.

songs.unshift("Atlantic by Thrice on the album Vheissu");
songs.push("Clipping by Mutemath on the album Armistice");

console.log("with added songs: ", songs);

// 2. Loop over the array and remove any words or characters that obviously don't belong.
// 3. Students must find and replace the > character in each item with a - character.

function removeSymbols(array) {
for (i = 0; i < array.length; i++) {
	array[i] = array[i].replace(">", "-")
	array[i] = array[i].replace("*", "");
	array[i] = array[i].replace("(", "");
	array[i] = array[i].replace("!", "");
	array[i] = array[i].replace("@", "");
	}
	console.log(array)
};

removeSymbols(songs);

// 4. Must add each string to the DOM in index.html in the main content area.

// map method? - make array of the modified strings