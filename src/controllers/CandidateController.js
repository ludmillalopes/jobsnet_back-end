const Candidate = require('../models/Candidate');

module.exports = {
  async register(req, res) {

    const { nome, cpf, nascimento, cep, logradouro, numero, complemento, bairro, cidade, estado, emailForm, celular, profissao, file } = req.body;

    const newCandidate = new Candidate();

    newCandidate.nome = nome;
    newCandidate.cpf = cpf;
    newCandidate.nascimento = nascimento;
    newCandidate.cep = cep;
    newCandidate.logradouro = logradouro;
    newCandidate.numero = numero;
    newCandidate.complemento = complemento;
    newCandidate.bairro = bairro;
    newCandidate.cidade = cidade;
    newCandidate.estado = estado;
    newCandidate.emailForm = emailForm;
    newCandidate.celular = celular;
    newCandidate.profissao = profissao;
    newCandidate.file = file;

    newCandidate.save((err, savedCandidate) => {
      if (err) {
        console.log(err);
        return res.status(500).send();
      }

      return res.status(200).send(savedCandidate);
    });
  },
}