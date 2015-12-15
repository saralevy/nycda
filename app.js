var myApp = angular.module('myApp',[]);

myApp.controller('formController', ['$scope', function($scope) {

    $scope.myItems = [{
        listName: 'personal',
        text: 'Personal'
    },{
        listName: 'work',
        text: 'Work'
    }, {
        listName: 'trip',
        text: 'Trip'
    }];

    $scope.addItem = function () {
        $scope.myItems.push({text: $scope.textInput});
        $scope.textInput = '';
    }

    $scope.deleteItem = function (index) {
        $scope.myItems.splice(index, 1);
    }
}]);