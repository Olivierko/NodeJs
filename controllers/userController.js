var userService = require('../services/userService');

exports.index = function (request, result) {

    var users = userService.getAllUsers();

    var jsonResult = JSON.stringify(users);

    result.send(jsonResult);
};

exports.getUser = function (request, result) {
    
    var userId = request.params.id;

    var user = userService.getUser(userId);

    var jsonResult = JSON.stringify(user);

    result.send(jsonResult);
};