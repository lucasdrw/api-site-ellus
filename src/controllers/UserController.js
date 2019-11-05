const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { user, senha } = req.body;

    //verifica o user da requisição no banco para saber se não ja tem cadastrado
    const usuario = await User.findOne({ user });

    //se tiver user ja cadastrado com o nome de usuario
    if (usuario) {
      return res.status(401).json({ error: "Usuario ja cadastrado" });
    }

    //se não tiver ele cria um novo usuario com user e senha que pegou da requisição
    await User.create({ user, senha });

    return res.json({ user, senha });
  }
};
