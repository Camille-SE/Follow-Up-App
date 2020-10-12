// require passport, LocalStrategy and passport-local
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require()

passport.use(new LocalStrategy({
    // do these fields need to match user schema?
    usernameField: 'email',
    passwordField: 'password'
},
    function (email, password, cb) {


}
))
