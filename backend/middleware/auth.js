//Apliqué à toutes les routes permet de vérifier systématiquement les tokens qui sont envoyés avec les requêtes
const jwt = require('jsonwebtoken');
const { request } = require('../app');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split('')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId){
            throw 'User ID non valable !';
        } else {
            req.auth = {id:userId};
            next();
        }
        }catch (error) {
            res.status(401).json({ error: error | 'Requête non authentifiée !'});
    }
};