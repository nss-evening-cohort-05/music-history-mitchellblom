app.factory("ItemFactory", function($http, $q, FIREBASE_CONFIG) {

	let getSongsFromFb = () => {
		let songs = [];
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/songs.json`)
				.then((fbAddys) => {
					var songCollection = fbAddys.data;
					Object.keys(songCollection).forEach((key) => {
						songCollection[key].id = key;
						songs.push(songCollection[key]);
					});
					resolve(songs);
				})
				.catch((error) => {
					reject(error);
				});
		});
	};

	let getSingleSong = (id) => {
    return $q((resolve, reject) => {
       $http.get(`${FIREBASE_CONFIG.databaseURL}/songs/${id}.json`)
        .then((results) => {
          results.data.id = id;
          resolve(results);
        }).catch((error) => {
          reject(error);
        });
    });
  };

  let editSong = (item) => {
    return $q((resolve, reject) => {
      $http.put(`${FIREBASE_CONFIG.databaseURL}/songs/${item.id}.json`, 
        JSON.stringify({
        	name: item.name,
        	artist: item.artist,
          album: item.album,
          genre: item.genre
        })
    	)
      	.then((results) => {
              resolve(results);
          }).catch((error) => {
              reject(error);
          });
        });
  };

  let postNewSong = (newSong) => {
    return $q((resolve, reject) => {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/songs.json`, JSON.stringify(newSong))
        .then((results) => {
            resolve(results);
        }).catch((error) => {
            reject(error);
        });
    });
  };

	return {
    getSongsFromFb:getSongsFromFb,
    getSingleSong:getSingleSong,
    editSong:editSong,
    postNewSong:postNewSong
  };

});