const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = (req, res, next) => {
    console.log(req.body)

    bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
        if (err) {
            res.json({ message: err })
        }

        let user = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPass
        })
        user.save()
            .then(data => {
                res.json({ message: 'user added succesfully!' });
            })
            .catch(err => {
                res.json({ message: err })
            })
    })
}

const login = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    User.findOne({$or: [{email:username},{phone:username}]})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, function(err, result) {
                if (err) {
                    res.json({ message: err })
                }
                if (result) {
                    let token = jwt.sign({name:user.username}, 'verySecretValue', {expiresIn: '1h'})
                    res.json({
                        message: 'Login Successful!',
                        token
                    })
                }else{
                    res.json({
                        message: 'Password does not matched!'
                    })
                }
            })
        }else{
            res.json({
                message: 'No user found!'
            })
        }
    })
}

module.exports = {
    register, login
}