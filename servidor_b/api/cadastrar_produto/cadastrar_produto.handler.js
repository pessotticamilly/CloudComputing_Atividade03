const fetch = require('node-fetch');
const crud = require('../../crud/index');

const tabelaProducts = 'Products';
const tabelaUsers = 'Users';

async function cadastrar_produto(data) {
    let loginValido = false;

    //docker network ls
    // docker network create --driver bridge nome
    //docker run -d -p 8080:3000 --name destino --network nome

    const res = await fetch('http://destino:3000/api/login', {
        method: 'post',
        body: JSON.stringify({ Name: data.nameUser, Password: data.password }),
        headers: { 'Content-Type': 'application/json' },
    });

    loginValido = await res.json();
    console.log(loginValido);

    if (loginValido) {
        let user = await crud.getWithFilter(tabelaUsers, "==", "Name", data.nameUser);
        return await crud.save(tabelaProducts, null, { description: data.description, name: data.nameProduct, price: data.price, userCPF: user[0].CPF });
    } else {
        return { error: "Login inválido!" };
    };
};

async function retonarListaProdutos() {
    return await crud.get(tabelaProducts);
};

module.exports = {
    cadastrar_produto,
    retonarListaProdutos
};