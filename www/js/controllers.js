angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('TestPlansCtrl', function($scope) {
  $scope.testPlans = [
    { projectName: 'ProjectX', id: 1, platform: "iOS"  },
    { projectName: 'ProjectX', id: 2, platform: "Android" },
    { projectName: 'ProjectX', id: 3, platform: "Mac" },
    { projectName: 'ProjectX', id: 4, platform: "Windows" },
    { projectName: 'BagScan', id: 5, platform: "API" },
    { projectName: 'BagScan', id: 6, platform: "Frontend" }
  ];
})

.controller('TestPlanCtrl', function($scope, $stateParams) {
  $scope.testPlan = [
    {
      id: 1,
      description: "Test 1",
      preferenceOrder: 1

    },
    {
      id: 2,
      description: "Test 1",
      preferenceOrder: 2
    },
    {
      id: 3,
      description: "Test 1",
      preferenceOrder: 3
    }
  ];
})

.controller('TestCtrl', function($scope, $stateParams) {
  $scope.test = [
    {
      description: "Test 1",
      currentStep: 1,
      steps: [
        {
          orderNumber: 1,
          description: "Do step 1"
        },
        {
          orderNumber: 2,
          description: "Do step 2"
        },
        {
          orderNumber: 3,
          description: "Do step 3"
        }
      ]
    }
  ];
});
