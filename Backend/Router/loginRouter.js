const express = require("express");
const router = express.Router();
const signUpModel = require("../Models/SignupModel")
const { response } = require("express");


router.post('/signup', (request, res) => {
    console.log("-------------------------------------------------")
    console.log(request.body)
    const signedUpUser = new signUpModel({
        email: request.body.email,
        password: request.body.password,
        usertype: request.body.usertype,
        course: request.body.course,


    })

    signUpModel.find({ 'email': request.body.email }, (err, data) => {
        if (data.length > 0) res.json({ "success": false })
        else {
            res.json({ "success": true })
            signedUpUser.save();
        }
    })
        .catch(error => {
            response.json(error)
        })
})

router.post('/login', (request, res) => {
    debugger
    const email = request.body.email;
    const password=request.body.password;
    signUpModel.findOne({ 'email': email, 'password':password }, (err, data) => {
        debugger
        if (err) res.json({ err: err })
        else if (data) res.json({ "success": true, data: data })
        else res.json({ "success": false })
    })

})


module.exports = router