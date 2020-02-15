'use strict';

var mongoose = require('mongoose'),
produto = mongoose.model('produto');

exports.listar_todos_produtos = function(req, res){
    produto.find({}, function(err, produto){
        if(err)
        res.send(err);
        res.json(produto);
    });
};

exports.listar_produtos_por_nome = function(req, res){
    produto.findOne(req.params.name, function(err, produto){
        if (err)
        res.send(err);
        res.json(produto);
    });
};

exports.listar_ultimo_produto_inserido = function(req, res){
    produto.findOne(function(err, produto){
        if(err)
        res.send(err);
        res.json(produto);
    });
};

exports.inserir_produtos = function(req, res){
    var new_produto = new produto(req.body);
    new_produto.save(function(err, produto){
        if(err)
        res.send(err)
        res.json(produto)
    });
};

exports.atualizar_produtos = function(req, res) {
    produto.findOneAndUpdate({nome: req.params.nome}, req.body, {new: true}, function(err, produto) {
      if (err)
        res.send(err);
      res.json(produto);
    });
  };
  
  exports.deletar_produtos = function(req, res) {
    produto.remove({nome: req.params.nome}, function(err, produto) {
      if (err)
        res.send(err);
      res.json({ message: 'Produto deletado com sucesso' });
    });
  };