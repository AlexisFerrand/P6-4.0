const express = require('express');
const router = express.Router();

//router.post//
//const Sauces = require('../models/Sauces');
const saucesCtrl = require('../controllers/Sauces');

router.post('/', saucesCtrl.createSauces);
router.put('/:id', saucesCtrl.modifySauces);
router.delete('/:id', saucesCtrl.deleteSauces);
router.get('/:id', saucesCtrl.getOneSauces);
router.get('/', saucesCtrl.getAllSauces);

module.exports = router;