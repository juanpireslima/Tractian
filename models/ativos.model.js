const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AtivoSchema = new Schema({
  nome: {type: String, required: true},
  descricao: {type: String, required: true},
  imagem: {type: String, required: true},
  modelo: {type: String, required: true},
  responsavel: {type: String, required: true},
  status: {type: String, required: true},
});

module.exports = mongoose.model('Ativo', AtivoSchema);