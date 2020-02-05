const router = require('express').Router();

const Users = require('../users/users-model.js');

const verify = require("../auth/authenticate-middleware");

// for endpoints beginning with /api/users
router.get('/', verify, (req, res) => {
    Users.get()
        .then(users => {
            // res.status(201).json(Object.values(users));
            res.status(200).json({ message: "What, were you expecting a list of every existing user? A little birdie told me that's not secure! I mean, would YOU like it if we gave out YOUR username to someone else pinging this endpoint? Probably not!" })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'OOPS!' })
        });
});

module.exports = router;
