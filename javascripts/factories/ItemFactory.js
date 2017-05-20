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

	return {
    getSongsFromFb:getSongsFromFb,
    getSingleSong:getSingleSong
  };

});