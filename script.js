var app = angular.module('DemoApp', []);

app.controller('numberController', function ($scope) {
    $scope.avaStaff = 0;
    $scope.reqStaff = 0;
    $scope.extra = 0;

    $scope.recompute = function () {
        $scope.extra = ($scope.avaStaff - $scope.reqStaff);
        if ($scope.extra < 0) {
            document.getElementById("extra").classList.add("mystyle");
        }
    };
});