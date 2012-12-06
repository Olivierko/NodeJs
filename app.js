//Import the modulus.
var express = require('express')
            ,userController = require('./controllers/userController');

var service = express();

//User routes:
service.get('/users', userController.index);
service.get('/user/:id', userController.getUser);

service.listen(3000);

console.log('Server running at http://127.0.0.1:3000/');