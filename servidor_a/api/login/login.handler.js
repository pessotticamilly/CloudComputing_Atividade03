function login(dados, listaUsuarios) {
    console.log("dados: ", dados);
    
    for (let usuario of listaUsuarios) {
        if (usuario.name == dados.name && usuario.password == dados.password) {
            return true;
        };
    };

    return false;
};

module.exports = {
    login
};