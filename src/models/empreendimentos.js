const mongoose = require("mongoose");

const empreendimentosSchema = new mongoose.Schema(
  {
    id: { type: Number },
    nome: { type: String },
    referênciaVeganaEm: { type: Array },
    contato: { type: String },
    empreedimentoFísico: { type: Boolean },
    cidadeEstado: { type: String },
    statusAtiva: { type: Boolean }
  },
  {
    versionKey: false,
  }
);

const empreendimentos = mongoose.model(
  "empreendimentos",
  empreendimentosSchema
);

module.exports = empreendimentos;
