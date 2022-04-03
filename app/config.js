app.config(function ($routeProvider) {
  $routeProvider
      .when("/", {
          templateUrl: 'app/pages/login.html',
          controller: 'employee'
      })
});