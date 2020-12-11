const empreendimentos = require("../models/empreendimentos");

const createEmpreendimentos = (req, res) => {
  empreendimentos.countDocuments((err, count) => {
    if (err) {
      res.status(500).send({ message: err.message });
    } else {
      let empreendimento = new empreendimentos(req.body);
      empreendimento.id = count + 1;
      empreendimento.save(function (err) {
        if (err) {
          res.status(424).send({ message: err.message });
        } else {
          res.status(200).send({
            status: true,
            mensagem: "empreendimento adicionada com sucesso! :)",
          });
        }
      });
    }
  });
};

const readEmpreendimentos = (req, res) => {
 try { 
     empreendimentos.find(function (err, empreendimentos) {
    if (err) res.status(500).send(err.message);
    res.status(200).send(empreendimentos);
  });
} catch (err) {
    return res.status(424).send({ message: err });
  }
};

const readEmpreendimentosAtivos = (req, res) => {
  try {
  const status = req.query.statusAtiva
  empreendimentos.find({ statusAtiva: true}, (err, empreendimentos) => {
    if(err) res.status(500).send(err.message)
    res.status(200).send(empreendimentos)
  })
} catch (err) {
  return res.status(424).send({ message: err });
}
}

const updateEmpreendimentoInteiro = (req, res) => {
  try {
    const id = req.params.id;
    empreendimentos.updateOne(
      { id },
      { $set: req.body },
      { upsert: true },
      function (err) {
        if (err) {
          res.status(500).send({ message: err.message });
        } else {
          res.status(200).send({
              message: `Vegócio de ID ${id} atualizado com sucesso! :)`,
            });
        }
      }
    );
  } catch (err) {
    return res.status(424).send({ message: err });
  }
};

const updateEmpreendimentoParte = (req, res) => {
  try {
    const id = req.params.id;
    empreendimentos.updateOne(
      { id },
      { $set: req.body },
      { upsert: true },
      function (err) {
        if (err) {
          res.status(500).send({ message: err.message });
        } else {
          res.status(200).send({
              message: `Status do vegócio de ID ${id} atualizado com sucesso! :)`,
            });
        }
      }
    );
  } catch (err) {
    return res.status(424).send({ message: err });
  }
};

const deleteEmpreendimento = (req, res) => {
    try {const id = req.params.id;
    empreendimentos.deleteOne({ id }, function (err) {
      if (err) {
        res.status(500).send({ message: err.message });
      }
      res
        .status(200)
        .send({ message: `Vegócio de ID ${id} deletado/s com sucesso` });
    });
  } catch (err) {
      return res.status(424).send({ message: err });
    }
}
module.exports = {
  createEmpreendimentos,
  readEmpreendimentos,
  readEmpreendimentosAtivos,
  updateEmpreendimentoInteiro,
  updateEmpreendimentoParte,
  deleteEmpreendimento
};
