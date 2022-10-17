const crud = require("../../crud/index");

const tabelaUsers = "Users";

async function cadastrar(data) {
    console.log("data: ", data);
    return await crud.save(tabelaUsers, null, data);
}

async function retonarListaUsuarios() {
    return crud.get(tabelaUsers);
};

module.exports = {
    cadastrar,
    retonarListaUsuarios
}