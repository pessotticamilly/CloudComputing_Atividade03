const express = require("express");
const router = express.Router();

const cadastrar_usuario = require("./api/cadastrar_usuario/cadastrar_usuario.controller");
const login = require("./api/login/login.controller");

router.use("/cadastrar_usuario", cadastrar_usuario);
router.use("/login", login);

module.exports = router;