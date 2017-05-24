let isAuth = (AuthFactory) => new Promise((resolve, reject) => {
  if (AuthFactory.isAuthenticated()) {
    resolve();
  } else {
    reject();
  }
});

app.run(function($location, $rootScope, FIREBASE_CONFIG, AuthFactory) {
  firebase.initializeApp(FIREBASE_CONFIG);
  $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute) {
    var logged = AuthFactory.isAuthenticated();
    var appTo;
    if (currRoute.originalPath) {
      appTo = currRoute.originalPath.indexOf('/auth') !== -1;
    }
    if (!appTo && !logged) {
      event.preventDefault();
      $location.path('/auth');
    }
  });
});

app.config(function($routeProvider) {
    $routeProvider
    .when('/auth', {
      templateUrl: 'partials/auth.html',
      controller: 'AuthCtrl'
    })
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
    .when('/logout', {
      templateUrl: 'partials/auth.html',
      controller: 'AuthCtrl',
      resolve: {isAuth}
    })
    .otherwise('auth');
});