const crud = require("../../crud/index");

const nomeTabela = "Users";

async function cadastrar(dados) {
    console.log("dados: ", dados);
    return await crud.save(nomeTabela, null, dados);
};

async function retonarListaUsuarios() {
    return crud.get(nomeTabela);
};

module.exports = {
    cadastrar,
    retonarListaUsuarios
};