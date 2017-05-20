app.run(function(FIREBASE_CONFIG) {
	firebase.initializeApp(FIREBASE_CONFIG); 
});																							// config runs once, run runs when any controller changes

app.config(function($routeProvider){
    $routeProvider
        .when('/item/list', {
            templateUrl: 'partials/item-list.html',
            controller: 'ItemListCtrl'
        })
        .when('/item/new', {
            templateUrl: 'partials/item-new.html',
            controller: 'ItemNewCtrl'
        })
        .when('/item/view/:id', {
            templateUrl: 'partials/item-view.html',
            controller: 'ItemViewCtrl'
        })
        .when('/item/edit/:id', {
            templateUrl: 'partials/item-new.html',
            controller: 'ItemEditCtrl'
        })
        .otherwise('item/list');
});