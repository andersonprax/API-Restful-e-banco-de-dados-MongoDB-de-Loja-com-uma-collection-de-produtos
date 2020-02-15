'use strict';
module.exports = function(app) {
    var lojaAPIcontroller = require('../controllers/lojaAPIcontroller');
    var produtosAPIcontroller = require('../controllers/produtosAPIcontroller');

    // List Routes
    app.route('/loja')
    .get(lojaAPIcontroller.listar_todas_as_lojas)
    .get(lojaAPIcontroller.listar_loja_por_nome)
    .post(lojaAPIcontroller.inserir_loja);

    app.route('/produtos')
    .get(produtosAPIcontroller.listar_todos_produtos)
    .get(produtosAPIcontroller.listar_produtos_por_nome)
    .get(produtosAPIcontroller.listar_ultimo_produto_inserido)
    .post(produtosAPIcontroller.inserir_produtos)
    .put(produtosAPIcontroller.atualizar_produtos)
    .delete(produtosAPIcontroller.deletar_produtos);

};