const mongoose = require("mongoose");
const paginate = require("mongoose-paginate");

const ChamadoSchema = new mongoose.Schema({
  nomePosto: String,
  data: String,
  prioridade: String,
  atendimento: String,
  detalhes: String,
  situacao: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, {timestamps : true});

ChamadoSchema.plugin(paginate); 

module.exports = mongoose.model("Chamado", ChamadoSchema);
