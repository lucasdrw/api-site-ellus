const Posto = require("../models/Posto");

module.exports = {
    async index(req, res) {
        const postos = await Posto.find({});
    
        return res.json(postos);
    },
  
    async store(req, res) {
    const { posto } = req.body;

    //verifica se ja tem um posto cadastrado com nome igual
    const postov = await User.findOne({ posto });

    //se já tiver cadastrado
    if (postov) {
      return res.status(401).json({ error: "Já existe um posto cadastrado com esse nome" });
    }

    //se não tiver cadastrado
    await Posto.create({ posto });

    return res.json({ posto });
  },

  //async show(req, res){
  //  const usuario = await User.findById(req.params.id);
  //  return res.json(usuario);
  //}, 

  /*async update(req, res){
    const { user, senha} = req.body;

    const atualizarUsuario = await User.findByIdAndUpdate(
      req.params.id, 
      {user, senha},
      {new: true}
    );

    return res.json(atualizarUsuario);
  } */
};
