const express = require('express');
const router = express.Router();
const password = require('../middleware/password');
const userCtrl = require('../controllers/user');
const email = require('../middleware/email');
//Post car le frontend va envoyer le mail et le mdp
router.post('/signup', email, password, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;