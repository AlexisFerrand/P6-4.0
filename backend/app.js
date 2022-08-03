//Importer express
const bodyParser = require('body-parser');
const express = require('express');
//Crée une application express
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const { deleteOne } = require('./models/Sauces');

const userRoutes = require('./routes/user');
const saucesRoutes = require('./routes/Sauces');

//Intercepte toutes les requêtes qui ont du json 
app.use(express.json());

//Appliqué à toutes les requêtes de notre serveur
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

//app.post('/api/sauces', (req, res, next) => {
//  delete req.body._id;
//  const sauces = new Sauces({
//    ...req.body
//  })
//  sauces.save()
//  .then(() => res.status(201).json({ message : 'Objet enregistrée'}))
//  .catch(error => res.status(400).json({ error }));
//});

//app.put('/api/sauces/:id', (req, res, next) => {
//  Sauces.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
//  .then(() => res.status(200).json({ message: 'Objet Modifié !'}))
//  .catch(error => res.status(400).json({ error }))
//});

//app.delete('/api/sauces/:id', (req, res, next) => {
//  Sauces.deleteOne({ _id: req.params.id })
//  .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
//  .catch(error => res.status(400).json({ error }))
//});



//app.get('/api/sauces/:id', (req, res, next) => {
//  Sauces.findOne({ _id: req.params.id })
//  .then(sauces => res.status(200).json(sauces))
//  .catch(error => res.status(404).json({ error }));
//});

//app.get('/api/sauces', (req, res, next) => {
//  Sauces.find()
//  .then(sauces => res.status(200).json(sauces))
//  .catch(error => res.status(400).json({error}))
//});




mongoose.connect('mongodb+srv://AlexisF:86513794XG@cluster0.trfhk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));







//app.use('/api/stuff', stuffRoutes); sauces
app.use('/api/auth', userRoutes);
app.use('/api/sauces', saucesRoutes);


// GIVE IMAGE DIRECTORY PATH
app.use('/images', express.static(path.join(__dirname, 'images')));

//Exporte cette constante pour qu'on puisse y accéder depuis els autres fichiers du dossier notamment notre serveur node 
module.exports = app;

