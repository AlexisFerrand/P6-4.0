const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
//Post car le frontend va envoyer le mail et le mdp
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;