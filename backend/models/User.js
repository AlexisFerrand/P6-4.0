const mongoose = require('mongoose');
//Importe l'installation faite pour le mongoose unique validator pour vérifier que l'on puisse créer un compte par mail
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true },
    password: {type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);