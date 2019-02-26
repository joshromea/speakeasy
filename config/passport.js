//load bcrypt
let bCrypt = require("bcrypt-nodejs"); //secures our password

module.exports = function (passport, User) {
    var User = User; //initializes user model which gets passed as an argument

    let LocalStrategy = require("passport-local").Strategy; //initializes the passport-local strategy

    //serialize to save user id in the session to retrieve user details when needed
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });
    // deserialize user
    passport.deserializeUser(function (id, done) {
        User.findByPk(id).then(function (user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    });
    passport.use(
        "local-signup",
        new LocalStrategy(
            {
                usernameField: "userName", //requesting the user-name field to create passport variable.

                passwordField: "password", //requesting the password field to create passport variable.

                passReqToCallback: true // allows to pass back the entire request to the callback
            },

            function (req, userName, password, done) {
                let generateHash = function (password) {
                    return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
                };

                User.findOne({
                    where: {
                        userName: userName
                    }
                }).then(function (user) {
                    if (user) {
                        return done(null, false, {
                            message: "That username is already taken"
                        });
                    } else {
                        let userPassword = generateHash(password); //protects password
                        let data = {
                            userName: userName,
                            password: userPassword
                        };

                        User.create(data).then(function (newUser, created) {
                            if (!newUser) {
                                return done(null, false);
                            }

                            if (newUser) {
                                return done(null, newUser);
                            }
                        });
                    }
                });
            }
        )
    );

    passport.use(
        "local-signin",
        new LocalStrategy(
            {
                usernameField: "userName", //requesting the user-name field to create passport variable.

                passwordField: "password", //requesting the password field to create passport variable.

                passReqToCallback: true // allows to pass back the entire request to the callback
            },

            function (req, userName, password, done) {
                const isValidPassword = function (userpass, password) {
                    return bCrypt.compareSync(password, userpass);
                };

                User.findOne({
                    where: {
                        userName: userName
                    }
                }).then(function (user) {
                    if (user) {
                        if (isValidPassword(user.password, password)) {
                            return done(null, user);
                        }
                        return done(null, false, {
                            message: "The username and passwod ae not correct"
                        });
                    } else {
                        return done(null, false, {
                            message: "The username and passwod ae not correct"
                        });
                    }
                });
            }
        )
    );
};
