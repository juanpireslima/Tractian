var Unidade = require('../models/unidades.model');


// Creating unidade
exports.create = function (req, res, next) {
  let unidade = new Unidade(
   {
    nome: req.body.nome,
    descricao: req.body.descricao,
    imagem: req.body.imagem
   }
   );
   unidade.save(function (err) {
  if (err) {
    return next(err);
  }
    res.send('Registo de Unidade criado com sucesso')
   })
  };

// Finding unidade
exports.details = function (req, res, next) {
  Unidade.findById(req.params.id, function (err, unidade) {
    if (err) return next(err);
      res.send(unidade);
    })
};

// Updating unidade
exports.update = function (req, res, next) {
  Unidade.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, unidade) {
      if (err) return next(err);
      res.send('Unidade atualizada !');
  });
};

// Deleting unidade
exports.delete = function (req, res, next) {
  Unidade.findByIdAndRemove(req.params.id, function (err) {
      if (err) return next(err);
      res.send('Unidade deletada com sucesso !');
  })
};
