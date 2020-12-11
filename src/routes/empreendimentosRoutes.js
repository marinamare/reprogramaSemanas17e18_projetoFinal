const express = require('express')
const router = express.Router()
const controller = require("../controllers/empreendimentosController")

router.post("/", controller.createEmpreendimentos)
router.get("/", controller.readEmpreendimentos)
router.get("/ativos", controller.readEmpreendimentosAtivos)
router.put("/:id", controller.updateEmpreendimentoInteiro)
router.patch("/:id", controller.updateEmpreendimentoParte)
router.delete("/:id", controller.deleteEmpreendimento)

module.exports = router