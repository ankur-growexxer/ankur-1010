app.config(function ($routeProvider) {
  $routeProvider
      .when("/", {
          templateUrl: 'app/pages/login.html',
          controller: 'employee'
      })
      .when("/dashbord", {
        templateUrl: "app/pages/dashbord.html"
      //   templateUrl: 'app/pages/employee.html',
      //   controller: 'FormController'

    })
    .when("/employeelist", {
        templateUrl: 'app/pages/employee.html',
        controller: 'FormController'
    })
    .when("/addemployee", {
        templateUrl: 'app/pages/addemployee.html',
        controller: 'FormController'
    })
});