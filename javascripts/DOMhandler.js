$("body").click(function(e){
;	if (e.target.className.split(" ")[0] === "deleteButton") {
		e.target.parentNode.remove();
	}
});

$("body").click(function(e) {
	if (e.target.id === "loadMoreSongs") {
	Songs.execute2ndRequest();
	}
});