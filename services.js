angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(friend) {
      chats.splice(chats.indexOf(friend), 1);
    },
    get: function(friend) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(friend)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array
  var friends = [{
    id: 0,
    name: 'Ben Sparrow',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(friend) {
      chats.splice(chats.indexOf(friend), 1);
    },
    get: function(friend) {
      for (var i = 0; i < friends.length; i++) {
        if (friends[i].id === parseInt(friendID)) {
          return friends[i];
        }
      }
      return null;
    }
  };
});