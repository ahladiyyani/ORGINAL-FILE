var dbconnection = require('../config/db.js');
exports.login = function (req, res) {
  
    try {

        var sql = "SELECT * FROM users WHERE user_name='" + req.email + "';";
        db.get().query(sql, function (err, rows) {
            if (err) {
                return res(err, null);
            }
            if (rows !== undefined) {
                return res(null, rows[0]);
            }
            else { return res(err = new Error('undefined'), null) }

        });
    }
    catch (e) {
        return res(e, null);;
    }
};

exports.createNewUser = function (req, res, next) {
    try {
        var data = {};
        var email = req.email;
        var password = req.password;

        data.user_name = email;
        data.password = password;


        dbconnection.query("insert into users set ?", [data], function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
            if (result !== undefined) {
                data.result = result;
                return res(null, data);
            }
            else { return res(error = new Error('404'), undefined) }
        });
    }
    catch (e) {
        console.log(e);
        return res(error = e, null);
    }
};