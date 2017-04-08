var Songs = (function(oldSongs) {

    var data;
    var data2;

    oldSongs.execute2ndRequest = function() {
        $.ajax({
        url: ["songs2.json"]
        }).done(function(data2) {
        Songs.getNewSongArray2(data2)
        }).fail(function(error) {
        console.log("error");
        });
    }

    function fileFailed() {
        alert("Request Timed Out");
    }

    $.ajax({
        url: ["songs1.json"]
        }).done(function(data) {
        Songs.getNewSongArray(data)
        }).fail(function(error) {
        console.log("error");
    });

    return oldSongs;

})(Songs || {});