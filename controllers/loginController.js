var userlogin = require("../model/login");


exports.login = function (req, res, next) {
    console.log(req.body);
    if (req.method == "POST") {
        var user = {};
        var post = req.body;
        var password = post.password.trim();
        user.email = post.email;
        userlogin.login(user, function (err, data) {
            if (!err) {
                if (data) {

                }
                else {

                    res.render('login.ejs');
                }
            } else {
                res.render('login.ejs');
            }
        });
    } else {
        res.render('login.ejs');
    }
};


exports.userInsert = function (req, res, next) {

    let data = req.body;
    console.log('Insert');
    console.log(data);

    userlogin.createNewUser(data, function (err, result) {
        if(err){
            console.log(err);
        }else{
            res.end(JSON.stringify(result))
        }
    });
};
