app.controller("ItemViewCtrl", function($routeParams, $scope, ItemFactory) {	

    $scope.selectedSong = {};

    ItemFactory.getSingleSong($routeParams.id).then((results) => {
    	$scope.selectedSong = results.data;
    }).catch((error) => {
    	console.log(error);
    });

});