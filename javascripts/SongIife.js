var Songs = (function(oldSongs) {

    var data;

    function getData(data) {
        var jData = JSON.parse(this.responseText);
        data = jData.songs;
        for (var i = 0; i < data.length; i++) {
            Songs.testFunction(data[i]);
        }
        return data;
    }

    function fileFailed() {
        alert("Request Timed Out");
    }

    var songRequest = new XMLHttpRequest();
    songRequest.addEventListener("load", getData);
    songRequest.addEventListener("error", fileFailed);
    songRequest.open("GET", "songs1.json");
    songRequest.send();

    oldSongs.getXhr = function() {

        return data;

    }

    return oldSongs;

})(Songs || {});