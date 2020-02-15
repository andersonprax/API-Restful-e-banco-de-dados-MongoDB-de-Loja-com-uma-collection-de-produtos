var express = require('express'),
app = express(),
port = process.env.PORT || 3000;
mongoose = require('mongoose'),
loja = require('../FICR-Atividade2-LojaProdutos/lojaAPI/models/lojaAPImodel'), //created model loading here
produto = require('../FICR-Atividade2-LojaProdutos/lojaAPI/models/produtosAPImodel')
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/lojadb',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}); 

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

var routes = require('./lojaAPI/routes/lojaAPIroutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Servidor da Loja API RESTful foi startado na porta: ' + port);