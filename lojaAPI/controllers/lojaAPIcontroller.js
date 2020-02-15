'use strict';

var mongoose = require('mongoose'),
loja = mongoose.model('lojaAPI');

exports.listar_todas_as_lojas = function(req, res){
    loja.find({}, function(err, loja){
        if(err)
        res.send(err);
        res.json(loja);
    });
};

exports.listar_loja_por_nome = function(req, res){
    loja.findOne(req.params.name, function(err, loja){
        if(err)
        res.send(err);
        res.json(loja);
    });
};

exports.inserir_loja = function(req, res){
    var new_loja = new Loja(req.body);
    new_loja.save(function(err, loja){
        if(err)
        res.send(err);
        res.json(loja);
    });
};