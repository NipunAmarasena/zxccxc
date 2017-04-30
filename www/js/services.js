angular.module('starter.services', []).

factory('Chats', function () {
    // Might use a resource here that returns a JSON array
    // Some fake testing data
    var chats = [{
        id: 0
        , name: 'Ben Sparrow'
        , lastText: 'You on your way?'
        , face: 'img/ben.png'
  }, {
        id: 1
        , name: 'Max Lynx'
        , lastText: 'Hey, it\'s me'
        , face: 'img/max.png'
  }, {
        id: 2
        , name: 'Adam Bradleyson'
        , lastText: 'I should buy a boat'
        , face: 'img/adam.jpg'
  }, {
        id: 3
        , name: 'Perry Governor'
        , lastText: 'Look at my mukluks!'
        , face: 'img/perry.png'
  }, {
        id: 4
        , name: 'Mike Harrington'
        , lastText: 'This is wicked good ice cream.'
        , face: 'img/mike.png'
  }];
    return {
        all: function () {
            return chats;
        }
        , remove: function (chat) {
            chats.splice(chats.indexOf(chat), 1);
        }
        , get: function (chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };
})

.factory('RegisterdUsers', function($q) {

    // return {
    //
    //     loginUser : function(name,pw){
    //         var deffered = $q.defer();
    //         var promise = deffered.promise;
    //
    //         if(name == 'user1' && pw == 'pw1'){
    //             deffered.resolve('Welcome '+name);
    //         }
    //         else{
    //             deffered.reject('Wrong credentials');
    //         }
    //
    //          promise.success = function(fn) {
    //             promise.then(fn);
    //             return promise;
    //         }
    //         promise.error = function(fn) {
    //             promise.then(null, fn);
    //             return promise;
    //         }
    //
    //         return promise;
    //     }
    //
    // };

  var users = [{
    id: 1
    , name: 'User1'
    , pw : 'User1'
  }, {
    id: 2
    , name: 'User2'
    , pw : 'User2'
  }];

  return {
    all: function () {
      return users;
    }
    , remove: function (user) {
      chats.splice(users.indexOf(user), 1);
    }
    , get: function (userId) {

      for (var i = 0; i < users.length; i++) {
        if (users[i].name === userId) {

          return users[i];
        }
      }
      return null;
    }
  };





});
