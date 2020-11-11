var Ativo = require('../models/ativos.model');


// Creating ativo
exports.create = function (req, res, next) {
  let ativo = new Ativo(
   {
    nome: req.body.nome,
    descricao: req.body.descricao,
    imagem: req.body.imagem,
    modelo: req.body.modelo,
    responsavel: req.body.responsavel,
    status: req.body.status
   }
   );
   ativo.save(function (err) {
  if (err) {
    return next(err);
  }
    res.send('Registo de Ativo criado com sucesso')
   })
  };

// Finding ativo
exports.details = function (req, res, next) {
  Ativo.findById(req.params.id, function (err, ativo) {
    if (err) return next(err);
      res.send(ativo);
    })
};

// Updating ativo
exports.update = function (req, res, next) {
  Ativo.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, ativo) {
      if (err) return next(err);
      res.send('Ativo atualizada !');
  });
};

// Deleting ativo
exports.delete = function (req, res, next) {
  Ativo.findByIdAndRemove(req.params.id, function (err) {
      if (err) return next(err);
      res.send('Ativo deletado com sucesso !');
  })
};
