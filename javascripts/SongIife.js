var Songs = (function(oldSongs) {

    var data;
    var data2;

    function getData(data) {
        var jData = JSON.parse(this.responseText);
        data = jData.songs;
        for (var i = 0; i < data.length; i++) {
            Songs.getNewSongArray(data[i]);
        }
        return data;
    }

    function getData2(data2) {
        var jData = JSON.parse(this.responseText);
        data2 = jData.songs;
        for (var i = 0; i < data2.length; i++) {
            Songs.getNewSongArray2(data2[i]);
        }
        return data2;
    }


    var songRequest = new XMLHttpRequest();
    songRequest.addEventListener("load", getData);
    songRequest.addEventListener("error", fileFailed);
    songRequest.open("GET", "songs1.json");
    songRequest.send();

    oldSongs.execute2ndRequest = function() {
	    var songRequest2 = new XMLHttpRequest();
	    songRequest2.addEventListener("load", getData2);
	    songRequest2.addEventListener("error", fileFailed);
	    songRequest2.open("GET", "songs2.json");
	    songRequest2.send();
	}

    oldSongs.getXhr = function() {
        return data;
    }

    oldSongs.getXhr2 = function() {
        return data2;
    }

    function fileFailed() {
        alert("Request Timed Out");
    }

    return oldSongs;

})(Songs || {});