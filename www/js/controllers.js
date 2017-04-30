angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})


.controller('UserCtrl', function($scope, $stateParams, RegisterdUsers, $state, $ionicPopup) {
  $scope.settings = {
    enableFriends: true
  };

    $scope.registeredusers = RegisterdUsers.all();




    $scope.validateuser = function(newuser)
    {


       console.log('username'+ newuser.userid + ' - pw : '+ newuser.pw);


      var ret = RegisterdUsers.get( newuser.userid);

        console.log('ret'+ret);

      if(ret == null){
        var alertpopup = $ionicPopup.alert({

          title: 'Login failed!',
          template: 'Please check your credentials!'
        });
      }
      else{
        $state.go('tab.chats');
      }

    }





});



