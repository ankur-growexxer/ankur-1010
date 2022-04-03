app.controller('employee', function ($scope, $location, $window) {


    $scope.user = 'root',
        $scope.pass = 'Root@12345',

        $scope.username = "";
    $scope.password = "";


    if ($window.sessionStorage.getItem("isAuth") === "true") {
        $location.path("/dashbord");
    } else{
        $location.path("/");
    }


    $scope.dologin = function () {

        if (($scope.username != "" && $scope.password != "") && ($scope.user == $scope.username && $scope.pass == $scope.password)) {
            $window.sessionStorage.setItem("isAuth", true);
            $location.path("/dashbord");
            // window.location.href = "#!/dashbord";
        }
        else {
            alert("Invalid username and Password")
        }

    };
});


