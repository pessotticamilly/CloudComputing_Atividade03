const express = require("express");
const router = express.Router();

const cadastrar_produto_handler = require("./cadastrar_produto.handler");

router.get("/", async (req, res) => {
    res.json(await cadastrar_produto_handler.retonarListaProdutos());
});

router.post("/", async (req, res) => {
    res.json(await cadastrar_produto_handler.cadastrar_produto(req.body));
});

module.exports = router;