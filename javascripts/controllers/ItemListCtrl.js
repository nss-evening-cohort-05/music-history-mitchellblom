app.controller("ItemListCtrl", function($scope, ItemFactory) {	

	$scope.songs = [];

	let getSongsThenWriteToDom = () => {
		ItemFactory.getSongsFromFb().then((songs) => {
			$scope.songs = songs;
		}).catch((error) => {
			console.log(error);
		});
	};

	getSongsThenWriteToDom();

	// $scope.deleteContactPressed = (id) => {
	// 	console.log("delete pressed");
	// 	AddyFactory.deleteContact(id).then(() => {
	// 		getSongsThenWriteToDom();
	// 	}).catch((error) => {
	// 		console.log(error);
	// 	});
	// };

});