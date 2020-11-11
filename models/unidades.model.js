const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UnidadeSchema = new Schema({
  nome: {type: String, required: true},
  descricao: {type: String, required: true},
  imagem: {type: String, required: true},
});

module.exports = mongoose.model('Unidade', UnidadeSchema);