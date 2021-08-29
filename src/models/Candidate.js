const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
  nome: { type: String, unique: false, required: true },
  cpf: { type: Number, unique: true, required: true },
  nascimento: { type: String, unique: false, required: true },
  cep: { type: Number, unique: false, required: true },
  logradouro: { type: String, unique: false, required: true },
  numero: { type: Number, unique: false, required: true },
  complemento: { type: String, unique: false, required: true },
  bairro: { type: String, unique: false, required: true },
  cidade: { type: String, unique: false, required: true },
  estado: { type: String, unique: false, required: true },
  emailForm: { type: String, unique: true, required: true },
  celular: { type: Number, unique: false, required: true },
  profissao: { type: String, unique: false, required: true },
  file: { type: String, unique: false, required: true }
}, {
  timestamps: true
});
module.exports = mongoose.model('Candidate', CandidateSchema);