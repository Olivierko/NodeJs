var users = [
    { name: 'User1', password: 'pw1' }
, { name: 'User2', password: 'pw2' }
, { name: 'User3', password: 'pw3' }
, { name: 'User4', password: 'pw4' }
];

exports.getAllUsers = function () {

    //Get all users from user repository.
    
    return users;
};

exports.getUser = function(userId) {
    return users[userId];
};