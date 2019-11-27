const Posto = require("../models/Posto");

module.exports = {
    async index(req, res) {
        const postos = await Posto.find({});
    
        return res.json(postos);
    },
  
    async store(req, res) { 
    const { posto } = req.body;

    //verifica se ja tem um posto cadastrado com nome igual
    const postov = await Posto.findOne({ posto });

    //se já tiver cadastrado
    if (postov) {
      return res.status(401).json({ error: "Já existe um posto cadastrado com esse nome" });
    }

    //se não tiver cadastrado
    await Posto.create({ posto });

    return res.json({ posto });
  },

  async delete(req, res){
    await Posto.findByIdAndRemove(req.params.id);

    return res.status(200).send({
      message: 'Registro excluido com sucesso!'
    });
  }
};
