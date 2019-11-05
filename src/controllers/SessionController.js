const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { user, senha } = req.body;

    //buscando um usuario no banco para verificar se o usuario existe ou a senha ta errada
    const usuario = await User.findOne({ user });

    if (!usuario) {
      return res.status(401).json({ error: "Usuario não encontrado" });
    }

    if ((await usuario.senha) != senha) {
      return res.status(401).json({ error: "Senha incorreta" });
    }

    return res.json(usuario);
  }
};
