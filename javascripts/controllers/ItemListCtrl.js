app.controller("ItemListCtrl", function($scope, ItemFactory) {		// own code goes after $scope
	
	// $scope.items = [];

	// let getItems = () => {
	// 	ItemFactory.getItemList().then((itemz) => {		// now inside controller, will execute when controller loads
	// 		$scope.items = itemz;
	// 	}).catch((error) => {
	// 		console.log("get Error", error);
	// 	});
	// };

	// getItems();

	// $scope.deleteItem = (id) => {
	// 	ItemFactory.deletz(id).then(() => {
	// 		getItems();
	// 	}).catch((error) => {
	// 		console.log("deleteItem error", error);
	// 	});
	// };

	// $scope.inputChange = (item) => {								// has to be in $scope because it's referenced on the partial
	// 	ItemFactory.editItem(item).catch((error) => {
	// 		console.log("inputchange error", error);
	// 	});
	// };

});