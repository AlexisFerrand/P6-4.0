//Importer express
const express = require('express');
//Crée une application express
const app = express();
const mongoose = require('mongoose');
const path = require('path');

const Thing = require('./models/Thing');

//Intercepte toutes les requêtes qui ont du json 
app.use(express.json());

//Appliqué à toutes les requêtes de notre serveur
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.post('/api/sauces', (req, res, next) => {
  //delete req.body._id;
  const thing = new Thing({
    ...req.body
  })
  thing.save()
  .then(() => res.status(201).json({ message : 'Objet enregistrée'}))
  .catch(error => res.status(400).json({ error }));
});

app.get('/api/sauces', (req, res, next) => {
  const sauces = [
    {
      _id: 'oeihfzeoi',
      title: 'Mon premier objet',
      description: 'Les infos de mon premier objet',
      heat : 5,
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 4900,
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Mon deuxième objet',
      description: 'Les infos de mon deuxième objet',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 2900,
      heat : 5,
      userId: 'qsomihvqios',
    },
  ];
  res.status(200).json(sauces);
});


const userRoutes = require('./routes/user');

mongoose.connect('mongodb+srv://AlexisF:86513794XG@cluster0.trfhk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));







//app.use('/api/stuff', stuffRoutes); sauces
app.use('/api/auth', userRoutes);
//app.use('/api/sauces', saucesRoutes);


// GIVE IMAGE DIRECTORY PATH
app.use('/images', express.static(path.join(__dirname, 'images')));

//Exporte cette constante pour qu'on puisse y accéder depuis els autres fichiers du dossier notamment notre serveur node 
module.exports = app;

