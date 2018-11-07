const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movies = new Schema({
    hall: Number,
    moviename: String,
    starthour: String,
    endhour: String,
    break: String,
    description: String
});

module.exports = mongoose.model('movies', movies, 'movies');