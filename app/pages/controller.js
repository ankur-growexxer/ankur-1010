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

app.controller('FormController', function ($scope, $location, $window, userService) {

    if ($window.sessionStorage.getItem("isAuth") === "false") {
        $location.path("/");
    }

    $scope.currentDate = new Date();
    $scope.schema = {
        "type": "object",
        "properties": {
            "firstName": {
                "type": "string",
                "maxLength": "32",
                "pattern": "^[A-Za-z]+$",
                "validationMessage": "Enter Valid Firstname!"
            },
            "lastName": {
                "type": "string",
                "maxLength": "32",
                "pattern": "^[A-Za-z]+$",
                "validationMessage": "Enter Valid Lastname!"
            },
            "contactNumber": {
                "type": "string",
                "pattern": "^((\\+91-?)|0)?[0-9]{10}$",
                "validationMessage": "Enter Valid Mobilenumber!"
            },
            "email": {
                "type": "string",
                // "pattern": "^\\S+@\\S+$",
                "pattern": "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",
                "validationMessage": "Enter Valid Email!"
            },
            "dob": {
                "type": "date",
                //  "max":"{{ currentDate | date:'yyyy-MM-dd'}}"
            },
            "salary": {
                "type": "string",
                //  "maxLength":5,
                "pattern": "^[0-9]{1,6}$",
                "validationMessage": "Don't enter negative value!"
            },
        },
        "required": [
            "firstName",
            "lastName",
            "contactNumber",
            "email",
            "dob",
            "salary"
        ]
    };

    $scope.form = [

        {
            "key": "firstName",
            "type": "text",
            "placeholder": "Enter firstname",
            "notitle": true,
        },
        {
            "key": "lastName",
            "type": "text",
            "placeholder": "Enter lastname",
            "notitle": true
        },
        {
            "key": "contactNumber",
            "type": "text",
            "placeholder": "Enter mobilenumber",
            "notitle": true
        },
        {
            "key": "email",
            "type": "email",
            "placeholder": "Enter email",
            "notitle": true
        },
        {
            "key": "dob",
            "type": "date",
            "placeholder": "Enter date",
            // "htmlClass":"datelogo",
            "notitle": true
        },
        {
            "key": "salary",
            "type": "text",
            "placeholder": "Enter Salary",
            "notitle": true

        },


        {
            "type": "submit",
            "style": "button",
            "htmlClass": " col-sm-offset-3   col-sm-6  ",
            "title": "Submit"
        }
    ]

    $scope.model = {};

    $scope.callbackfunction = function () {
        $scope.todoList = userService.users;
        console.log($scope);
    };
    if ($scope.users == undefined) {
        userService.getUsers($scope.callbackfunction);
    }


    $scope.onSubmit = function (myform) {
        $scope.$broadcast('schemaFormValidate');
        if (myform.$valid) {
            userService.addUser($scope.callbackfunction, $scope.model);
            $location.path("employeelist");
        }
    }
});
