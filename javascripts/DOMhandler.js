$("body").click(function(e){
;	if (e.target.className.split(" ")[0] === "deleteButton") {
		e.target.parentNode.remove();
	}
});

$("body").click(function(e) {
	console.log(e.target.className);
	if (e.target.id === "loadMoreSongs" && e.target.className !== "btn btn-default disabled") {
	Songs.execute2ndRequest();
	}
});