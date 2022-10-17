function login(data, listaUsuarios) {
    console.log("data: ", data);
    for (let usuario of listaUsuarios) {
        if (usuario.name == data.name && usuario.password == data.password) {
            return true;
        }
    }
    return false;
}

module.exports = {
    login
}