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