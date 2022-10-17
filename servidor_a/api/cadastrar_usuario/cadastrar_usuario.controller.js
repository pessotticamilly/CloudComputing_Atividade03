const express = require("express");
const router = express.Router();

const cadastrar_usuario_handler = require("./cadastrar_usuario.handler");

router.get("/", async (req, res) => {
    res.json(await cadastrar_usuario_handler.retonarListaUsuarios());
});

router.post("/", async (req, res) => {
    res.json(await cadastrar_usuario_handler.cadastrar(req.body));
});


module.exports = router;