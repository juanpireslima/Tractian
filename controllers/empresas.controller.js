var Empresa = require('../models/empresas.model');


// Creating empresa
exports.create = function (req, res, next) {
  let empresa = new Empresa(
   {
    nome: req.body.nome,
    descricao: req.body.descricao,
    imagem: req.body.imagem
   }
   );
   empresa.save(function (err) {
  if (err) {
    return next(err);
  }
    res.send('Registo de Empresa criado com sucesso')
   })
  };

// Finding empresa
exports.details = function (req, res, next) {
  Empresa.findById(req.params.id, function (err, empresa) {
    if (err) return next(err);
      res.send(empresa);
    })
};

// Updating empresa
exports.update = function (req, res, next) {
  Empresa.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, empresa) {
      if (err) return next(err);
      res.send('Empresa atualizada !');
  });
};

// Deleting empresa
exports.delete = function (req, res, next) {
  Empresa.findByIdAndRemove(req.params.id, function (err) {
      if (err) return next(err);
      res.send('Empresa deletada com sucesso !');
  })
};
