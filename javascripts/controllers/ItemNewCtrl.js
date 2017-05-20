app.controller("ItemNewCtrl", function($http, $location, $q, $scope, FIREBASE_CONFIG, ItemFactory){

	$scope.addNewSong = () => {
		ItemFactory.postNewSong($scope.newSong).then(() => {
			$scope.newContact = {};
			$location.url("/item/list");
		}).catch((error) => {
			console.log(error);
		});
	};

});