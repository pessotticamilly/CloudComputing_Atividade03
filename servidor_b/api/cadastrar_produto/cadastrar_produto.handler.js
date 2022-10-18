const fetch = require('node-fetch');
const crud = require('../../crud/index');
const tabelaUm = 'Products';
const tabelaDois = 'Users';

async function cadastrar_produto(dados) {
    let verificacaoLogin = false;

    const res = await fetch('http://destino:3000/api/login', {
        method: 'post',
        body: JSON.stringify({ Name: dados.name, Password: dados.password }),
        headers: { 'Content-Type': 'application/json' },
    });

    verificacaoLogin = await res.json();
    console.log(verificacaoLogin);

    if (verificacaoLogin) {
        let user = await crud.getWithFilter(tabelaDois, "==", "Name", dados.Name);
        return await crud.save(tabelaUm, null, { description: dados.description, name: dados.name, price: dados.price, userCPF: user[0].CPF });
    } else {
        return { error: "Login inválido!" };
    };
};

async function retonarListaProdutos() {
    return await crud.get(tabelaUm);
};

module.exports = {
    cadastrar_produto,
    retonarListaProdutos
};