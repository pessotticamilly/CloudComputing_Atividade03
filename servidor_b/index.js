const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const router = require('./router');

app.use(express.json());

app.use("/api", router);

app.get("/", (req, res) => {
    res.send("Servidor B está rodando!");
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

//docker run -d -p 8080:3000 pessotticamilly/atividade_tres_servidor_a:1.0.0
//docker run -d -p 8081:3001 pessotticamilly/atividade_tres_servidor_b:1.0.0

//docker network ls
//docker network create --driver bridge my_network
//docker run -d -p 8080:3000 --name destino --network my_network pessotticamilly/atividade_tres_servidor_a:1.0.0
//docker run -d -p 8081:3001 --name origem --network my_network pessotticamilly/atividade_tres_servidor_b:1.0.0