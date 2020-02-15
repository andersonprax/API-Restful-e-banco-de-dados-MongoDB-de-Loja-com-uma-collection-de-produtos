'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lojaSchema = new Schema({
    nome: {
        type: String,
        required: 'Digite o nome da loja'
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('lojaAPI', lojaSchema);