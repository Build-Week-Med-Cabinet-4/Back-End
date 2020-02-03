const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = require('express').Router();

const { jwtSecret } = require('../config/secret')

const Users = require('../users/users-model.js');

// for endpoints beginning with /api/auth
router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Who are you. Could not register' })
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.getBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {

        const token = signToken(user);

        res.status(200).json({
          token: token,
          message: `Welcome, ${user.username}.`
        });
      } else {
        res.status(401).json({ message: 'Password or username is wrong:' })
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Cound not log in', }) //err: err.message 
    });
});


function signToken(user) {
  const payload = {
    userId: user.id,
    username: user.username
  };

  const options = {
    expiresIn: '3d'
  };

  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
