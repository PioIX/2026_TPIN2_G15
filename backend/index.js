const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();

app.use(cors());
app.use(express.json());

const servidor = http.createServer(app);

const io = new Server(servidor, {
    cors: {
        origin: "*"
    }
});

app.get("/", (req, res) => {
    res.send("Backend Pio Chat funcionando");
});

io.on("connection", (socket) => {
    console.log("Usuario conectado:", socket.id);

    socket.on("disconnect", () => {
        console.log("Usuario desconectado:", socket.id);
    });
});

servidor.listen(4000, () => {
    console.log("Servidor funcionando en http://localhost:4000");
});