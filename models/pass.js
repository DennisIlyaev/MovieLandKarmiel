const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const data = new Schema({
    password: String
});

module.exports = mongoose.model('pass', data, 'adminpass');