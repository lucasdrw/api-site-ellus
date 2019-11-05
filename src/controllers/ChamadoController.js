const Chamado = require("../models/Chamado");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;

    const chamados = await Chamado.paginate({}, {page, limit: 20, sort: {updatedAt: 'desc'}});

    return res.json(chamados);
  },

  async store(req, res) {
    const { nomePosto, data, prioridade, atendimento, situacao } = req.body; 
    const { user_id } = req.headers;

    const chamado = await Chamado.create({
      user: user_id,
      nomePosto,
      data,
      prioridade,
      atendimento,
      situacao
    });

    await chamado.populate("user").execPopulate(); 

    return res.json(chamado);
  },

  async show(req, res) {
    const chamado = await Chamado.findById(req.params.id);

    return res.json(chamado)
  },

  //metodo para atualizar o chamado
  async update(req, res) {

    const {nomePosto , data, prioridade, atendimento, situacao } = req.body;

    const atualizarChamado = await Chamado.findByIdAndUpdate(
      req.params.id,
      { nomePosto, data, prioridade, atendimento, situacao},
      { new: true});

    return res.json(atualizarChamado);
  },

  async delete(req, res){
    await Chamado.findByIdAndRemove(req.params.id);

    return res.status(200).send({
      message: 'Registro excluido com sucesso!'
    });
  }
};
