const db = require('../common/connect');

const User = function(user) {
    this.id = user.id;
    this.username = user.username;
    this.password = user.password;
    this.display_name = user.display_name;
    this.phone = user.phone;
    this.email = user.email;
    this.create_date = user.create_date;
    this.role = this.role;
}

User.getAll = function(result) {
    db.query("SELECT * FROM users", function(err, user) {
        if (err) {
            result(null);
            return;
        }else{
            result(user);
        }
    });
    
}

User.getById = function(id, result) {
   db.query("SELECT * FROM users WHERE id = ?", id, function(err, user) {
    if (err || user.length == 0) {
        result(null)
    }else{
        result(user[0])
    }
   }) 
   
}

User.create = function(newData, result) {
    db.query("INSERT INTO users SET ?", newData, function(err, user) {
        if (err) {
            result(null);
        }else{
            result({id: user.insertID, message: "Tạo user thành công!"});
        }
    })
}

User.delete = function(id, result) {
    db.query(`DELETE FROM users WHERE id = ${id}`, function(err, user) {
        if(err) {
            result("Err or user not found!");
        }else{
            result("id: " + id + " Deleted!!!")
        }
    })
}

User.update = function(e, result) {
    db.query(`UPDATE users SET name='${e.name}', phone='${e.phone}', email='${e.email}', role=${e.role} WHERE id=${e.id}`, function(err, user){
        if (err) {
            result("Error or Not Found");
        }else{
            result(e);
        }
    })
}
User.getByEmail = function (data, result) {
    db.query(`SELECT * FROM users WHERE email='${data}'`, function(err, user) {
        if(err) {
            result('User Not Found!');
        }else{
            result(user[0]);
        }
    })
}
module.exports = User;