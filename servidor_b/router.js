const express = require("express");
const router = express.Router();

const cadastrar_produto = require("./api/cadastrar_produto/cadastrar_produto.controller");

router.use("/cadastrar_produto", cadastrar_produto);

module.exports = router;