const router = require('express').Router();

const Users = require('../users/users-model.js');

const verify = require("../auth/authenticate-middleware");

// for endpoints beginning with /api/users
router.get('/', verify, (req, res) => {
    Users.get()
        .then(users => {
            res.status(201).json(Object.values(users));
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'OOPS!' })
        });
});

module.exports = router;
