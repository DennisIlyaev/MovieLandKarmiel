const express = require('express');
const admin = require('../models/pass');
const movies = require('../models/movies');
const mongoose = require('mongoose');
const router = express.Router();

mongoose.connect('mongodb://admin:123456m@ds249503.mlab.com:49503/movieland', {useNewUrlParser: true}, err => {
    err ? console.log(err) : console.log('Connected!');
});


router.get('/admin', (req, res) => {
    admin.find({}).exec((err, pass) => {
        err ? console.log(err) : res.send(pass);
    });
})

router.get('/movies', (req, res) => {
    movies.find({}).exec((err, movies) => {
        err ? console.log(err) : res.send(movies);
    });
});


router.post('/postmovie', (req, res) => {
    const movie = new movies(req.body);
    movie.save((err, postedMovie) => {
        err ? console.log(err) : res.send(postedMovie);
    });
})


router.put('/updatemovie/:id', (req, res) => {
    movies.findByIdAndUpdate(req.params.id, {
        $set: {hall: req.body.hall, moviename: req.body.moviename, starthour: req.body.starthour, endhour: req.body.endhour, break: req.body.break, description: req.body.description}
    }, { new : true}, (err, updatedMovie) => {
        err ? console.log(err) : res.send(updatedMovie);
    })
});

router.delete('/deletemovie/:id', (req, res) => {
    movies.findByIdAndRemove(req.params.id, (err, deletedMovie) => {
        err ? console.log(err) : res.send(deletedMovie);
    });
});

module.exports = router;