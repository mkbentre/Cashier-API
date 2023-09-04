var User = require('../models/user.model');
var HashPW = require('../common/HashPassword');
const JWT = require('../common/JWT');
exports.getAllUser = function(req, res) {
    User.getAll(function(data) {
        res.send({result:data});
    });

}

exports.get_user = function(req, res) {
    User.getById(req.params.id, function(response) {
        res.send({result: response});
    });
    console.log(req.body)
}
exports.EditUser = function(req, res) {
    var data = req.body
    User.update(data, function(response) {
        res.send({result: response});
    });
}

exports.UserRegister = function(req, res) {
    var data = req.body
    data.password = HashPW.Hash(data.password);
    User.create(data, function(response) {
        res.send({result: response});
    });
}

exports.DeleteUser = function(req, res) {
    var id = req.params.id;
    User.delete(id, function(response) {
        res.send({result: response});
    })
}

exports.checkUser = function(req, res) {
    if(req.body.email && req.body.password) {
        User.getByEmail(req.body.email, async function(response) {
            var data = {}
            data.password = req.body.password
            data.hash = response.password
            let check = await HashPW.check_hash(data)
            if(check) {
                const _token = await JWT.make(response.id);
                res.send({message: 'Welcome back: ' + response.display_name,token: _token});
            }else{
                res.send({result: "Wrong Email or Password"})
            }
        })
    }else{
        res.send({result: "Thông tin đăng nhập không hợp lệ"})
    }
    
}