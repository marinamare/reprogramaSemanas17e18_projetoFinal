const express = require('express')
const router = express.Router()
const controller = require("../controllers/empreendimentosController")

router.post("/", controller.createEmpreendimentos)
router.get("/", controller.readEmpreendimentos)
router.put("/:id", controller.updateEmpreendimento)
router.patch("/:id", controller.updateStatusEmpreendimento)
router.delete("/:id", controller.deleteEmpreendimento)

module.exports = router