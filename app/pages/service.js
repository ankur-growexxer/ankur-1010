app.service('userService', function ($http) {
  this.users = [];
  this.getUsers = function (cb) {
      if (this.users.length == 0) {
          $http.get("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001").then(function (response) {
              this.users = response.data;
              console.log(response);
              cb();
          }.bind(this));
      } else {
          cb();
      }
  };
  this.addUser = function (cb, user) {
      this.users.push(user);
      cb();
  }
});