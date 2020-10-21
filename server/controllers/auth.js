const db = require('../models')
const bcrypt = require('bcrypt')

const login = (req, res) => {
    console.log('req.user here >>>', req.user)
    console.log('req.session here >>>', req.session)
    res.json({ user: req.user.email })
}

const register = (req, res) => {
    console.log(req.body, 'Register')
    // validate the POSTed data - making sure we have a name, on email, a pw
    const { name, email, password } = req.body
    
    if (!name || !email || !password) {
        return res.json({
            message: 'Please enter a name, an email and a password'
        })
    }
    console.log("fields are not empty")
    // make sure the user doesn't already exist
    db.User.findOne({ email: email }, (err, foundUser) => {
        console.log("foundUser", foundUser)
        if (err) return res.json({
            message: 'Something went wrong'
        })

        if (foundUser) return res.json({
            message: 'A user with that email already exists'
        })

        // if the user doesn't exist, create and save a user to the DB
        const newUser = new db.User({
            name,
            email,
            password
        })
console.log(newUser)

        newUser.save((err, savedUser) => {
            if (err) res.json(err)
            console.log(savedUser)
            return res.json(savedUser)
        })
    })
    

}


const logout = (req, res) => {
    if (!req.user) return res.json({
      message: 'No User to log out'
    })
  
    req.logout()
    res.json({ message: "User logged out" })
}

// This is a utility function for developer use only
const verify = (req, res) => {

}

module.exports = {
    login,
    register,
    logout,
    verify
}