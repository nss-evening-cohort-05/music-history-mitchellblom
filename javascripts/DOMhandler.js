function writeNewSongToDom() {
    songContainer.innerHTML = SongIife.privateArrayOfSongs;
};

document.addEventListener ("click", function(e) {
	if (e.target.className.split(" ")[0] === "deleteButton") {
		e.target.parentNode.remove();
	}
});