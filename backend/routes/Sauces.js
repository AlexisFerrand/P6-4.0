const express = require('express');
const router = express.Router();

//router.post//
//const Sauces = require('../models/Sauces');
const saucesCtrl = require('../controllers/Sauces');
const auth = require('../middleware/auth');

router.post('/', auth, saucesCtrl.createSauces);
router.put('/:id', auth, saucesCtrl.modifySauces);
router.delete('/:id', auth, saucesCtrl.deleteSauces);
router.get('/:id', auth, saucesCtrl.getOneSauces);
router.get('/', auth, saucesCtrl.getAllSauces);

module.exports = router;