module.exports = function(router) {
    var userController = require('../controllers/user.controller');
    var JWT = require('../common/JWT');
    router.get('/api/v1/user/getall', userController.getAllUser);
    router.post('/api/v1/user/update', userController.EditUser);
    router.get('/api/v1/user/:id', userController.get_user);
    router.post('/api/v1/user/register', userController.UserRegister);
    router.delete('/api/v1/user/:id', userController.DeleteUser);
};