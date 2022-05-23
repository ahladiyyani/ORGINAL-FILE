var dbconnection = require('../config/db.js');
exports.login = function (req, res) {
  
    try {

        console.log("hello"+req.email);
        console.log("hello"+req.password);
        dbconnection.query("SELECT * FROM users WHERE emailid ='"+req.email+"' AND password ='"+req.password+"';", function (err, rows) {

            if(err)
            {
                return res(err,null)
            }
            var obj={};
            if(rows !== undefined)
            {
                obj = rows;
                console.log(obj)
                return res(null, obj)
            }
            // if (rows !== undefined) {
            //     return res(null, rows[0]);
            // }
            // else { return res(err = new Error('undefined'), null) }

        });
    }
    catch (e) {
        return res(e, null);;
    }
};

exports.createNewUser = function (req, res, next) {
    try {
        var data = {};
        var fullname=req.fullname;
        var address = req.address;
        var phonenumber = req.phonenumber;
        var emailid = req.emailid;
        var password = req.password;
        var confirmpassword = req.confirmpassword;
        var filepath = req.filepath;
        if(password ===confirmpassword)
        {

        
        
        // data.user_name = email;
        // data.password = password;


        // dbconnection.query("insert into users set ?", [data], function (err, result) {
            dbconnection.query("INSERT INTO users (fullname,address,phonenumber,emailid, password,filepath) VALUES ('"+fullname+"','"+address+"','"+phonenumber+"','"+emailid+"', '"+password+"','"+filepath+"');",function(err,result){
            
                if (err) throw err;
            // console.log("1 record inserted");
            if (result !== undefined) {
                data.result = result;
                return res(null, data);
            }
            else { return res(error = new Error('404'), undefined) }
        });
    }
    }
    catch (e) {
        console.log(e);
        return res(error = e, null);
    }
};


exports.updateUser= function (req, res, next) {
    try {
        var data = {};
        var email = req.email;
        var password = req.resetPassword;

        data.user_name = email;
        data.password = password;


        // dbconnection.query("insert into users set ?", [data], function (err, result) {
            dbconnection.query("UPDATE users SET password = '"+password+"' WHERE emailid= '"+email+"';",function(err,result){
            if (err) throw err;
            // console.log("1 record inserted");
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



exports.removeUser= function (req, res, next) {
    try {
        var data = {};
        var email = req.email;
        var password = req.password;

        data.email = email;
        data.password = password;

    


        // dbconnection.query("insert into users set ?", [data], function (err, result) {
            // dbconnection.query("DELETE FROM users WHERE user_name = '"+data.user_name+"';"
            dbconnection.query("DELETE from users where password ='"+password+"' AND emailid ='"+email+"';",function(err,result){
            if (err) throw err;
            // console.log("1 record inserted");
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


exports.admin2 = function (req, res) {
  
    try {

        console.log("hello"+req.email);
        console.log("hello"+req.password);
        dbconnection.query("SELECT * FROM ADMIN WHERE email ='"+req.email+"' AND password ='"+req.password+"';", function (err, result) {
            console.log("its meee"+result);
            if(err)
            {
                return res(err,null)
            }
            var obj={};
            if(result !== undefined)
            {
                

                dbconnection.query("select * from users;", function(err,data){

                    return res(null, data)
                });
            }
            // if (rows !== undefined) {
            //     return res(null, rows[0]);
            // }
            // else { return res(err = new Error('undefined'), null) }

        });
    }
    catch (e) {
        return res(e, null);;
    }
};