//importation de password-validator
const passwordvalidator = require("password-validator");
const { schema } = require("../models/Sauces");

//création du schéma
const passwordSchema = new passwordvalidator();

//le schéma que doit respecter le mot de passe
passwordSchema
.is().min(5)
.is().max(20)
.has().uppercase()
.has().lowercase()

module.exports = (req, res, next) => {
    if(passwordSchema.validate(req.body.password)){
        next();
    }else{
        return res
        .status(400)
        .json({error : `Le mot de passe n'est pas assez fort `+ passwordSchema.validate('req.body.password', { list: true})})
    }
}
