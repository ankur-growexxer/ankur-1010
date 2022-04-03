app.component("sideMenuComponent", {
  templateUrl: "app/component/menu.html",
  bindings: {
  },
  controller: function ($scope) {
    $scope.sidebarLinks = [
      {
        "title": "Employees",
        "link": "#!/employeelist",
        "icon": "fas fa-th"
      },
      {
        "title": "Add Employee",
        "link": "#!/addemployee",
        "icon": "fas fa-th"
      }
    ];
  }
});
app.component("headerComponent", {
  templateUrl: "app/component/header.html",
  bindings: {
    // tablerows: '<'
  },
  controller: function ($window, $location) {
      this.logout = function () {
          $window.sessionStorage.setItem("isAuth",false);
          $location.path("/");
      };
  }

});
app.component("footerComponent", {
  templateUrl: "app/component/footer.html",
  bindings: {
    // tablerows: '<'
  },

});

