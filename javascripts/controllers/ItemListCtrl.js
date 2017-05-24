app.controller("ItemListCtrl", function($rootScope, $scope, ItemFactory) {	

	$scope.songs = [];

	let getSongsThenWriteToDom = () => {
		ItemFactory.getSongsFromFb($rootScope.user.uid).then((songs) => {
			$scope.songs = songs;
		}).catch((error) => {
			console.log(error);
		});
	};

	getSongsThenWriteToDom();

	$scope.deleteSongPressed = (id) => {
		ItemFactory.deleteSong(id).then(() => {
			getSongsThenWriteToDom();
		}).catch((error) => {
			console.log(error);
		});
	};

});