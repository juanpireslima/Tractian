const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EmpresaSchema = new Schema({
  nome: {type: String, required: true},
  descricao: {type: String, required: true},
  imagem: {type: String, required: true},
});

module.exports = mongoose.model('Empresa', EmpresaSchema);