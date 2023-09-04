module.exports = function(router) {
    // var homeController = require('../controllers/home.controller');
    var userController = require('../controllers/user.controller');
    var JWT = require('../common/JWT');
    // router.get('/', homeController.home);
    // router.get('/about', homeController.about);
    router.get('/token', async function(req, res) {
        var user = {
            id:"1",
        };
        const _token = await JWT.make(user);
        res.send({token: _token});
    }); 

    router.post(process.env.USER_URL+'/login', userController.checkUser)
    // router.get('/check-token', async function(req, res) {

    //     try {
    //         var _token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJKYW1hIiwiZW1haWwiOiJraG9pQG1rYmVudHJlLmNvbSIsInBob25lIjoiMDU1OTk3NzQ0NCJ9LCJpYXQiOjE2OTMxNDQ3MTEsImV4cCI6MTY5MzE0ODMxMX0.Qd-CtMtEKAnkKJD4_g96ft4GmEoq3in1qRT9Jv-d4Hk"
    //         var data = await JWT.check(_token);
    //         res.send({token: data});
    //     }catch(err) {
    //         res.send({data: "Token invalid"})
    //     }
        
    // });
}