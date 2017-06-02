app.controller("ItemEditCtrl", function($location, $routeParams, $scope, ItemFactory){
    $scope.newSong = {};

    ItemFactory.getSingleSong($routeParams.id).then((results) => {
    	$scope.newSong = results.data;
    }).catch((error) => {
    	console.log(error);
    });

    $scope.addNewSong = () => {
    	ItemFactory.editSong($scope.newSong).then(() => {
    		$location.url('/item/list');
    	}).catch((error) => {
    		console.log(error);
    	});
    };

});