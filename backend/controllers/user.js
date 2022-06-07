const bcrypt = require('bcrypt');
const User = require('../models/User');
//Création de nouveaux utilisateurs
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user = new User({
            email: req.body.email,
            password: hash
        });
        user.save()
        .then(() => res.status(201).json({message: 'Utilisateur créé !'}))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({error}));
};
//Login d'utilisateurs existants
exports.login = (req, res, next) => {
    //on récupère l'utilisateur de la base qui correspond à l'email rentré
    User.findOne({email: req.body.email})
    .then(user => {
        //si il y en a pas on renvoi une erreur
        if (!user) {
            return res.status(401).json({error: 'Utilisateur non trouvé !'});
        }
        //on compare le mdp entré avec le hash de  la base de donnée
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            //si pas de correspondance on renvoie une erreur
            if (!valid) {
                return res.status(401).json({error: 'Mot de passe incorrect !'});
            }
            //si données rentré valides et trouvé dans la base de donnée on renvoie son userId et un token d'indentification 
            res.status(200).json({
                userId: user._id, 
                token: 'TOKEN'
            });
        })
        .catch(error => res.status(500).json({error}));
    })
    .catch(error => res.status(500).json({error}));
};