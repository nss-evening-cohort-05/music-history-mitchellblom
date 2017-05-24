app.controller("ItemNewCtrl", function($http, $location, $q, $rootScope, $scope, FIREBASE_CONFIG, ItemFactory){

	$scope.addNewSong = () => {
		$scope.newSong.uid = $rootScope.user.uid;
		console.log($scope.newSong.uid);
		ItemFactory.postNewSong($scope.newSong).then(() => {
			$scope.newContact = {};
			$location.url("/item/list");
		}).catch((error) => {
			console.log(error);
		});
	};

});