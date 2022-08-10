const express = require('express');
const router = express.Router();

//router.post//
//const Sauces = require('../models/Sauces');
const saucesCtrl = require('../controllers/Sauces');
const auth = require('../middleware/auth');
const image_multer = require('../middleware/multer');

router.post('/', auth, image_multer, saucesCtrl.createSauces);
router.put('/:id', auth, image_multer, saucesCtrl.modifySauces);
router.delete('/:id', auth, saucesCtrl.deleteSauces);
router.get('/:id', auth, saucesCtrl.getOneSauces);
router.get('/', auth, saucesCtrl.getAllSauces);
router.post('/:id/like', auth, saucesCtrl.likeDislikeSauce);

module.exports = router;