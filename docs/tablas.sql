CREATE TABLE Usuarios(
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    mail VARCHAR(100) UNIQUE NOT NULL,
    contrasena VARCHAR(100) NOT NULL,
    foto VARCHAR(100)
);

CREATE TABLE Chats(
    id_chat INT AUTO_INCREMENT PRIMARY KEY,
    tipo_chat BOOLEAN DEFAULT FALSE,
    fecha_creado DATETIME DEFAULT CURRENT_TIMESTAMP,
    foto VARCHAR(100),
    nombre_grupo VARCHAR(100)
);

CREATE TABLE Mensajes(
    id_mensaje INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    id_chat INT,
    contenido VARCHAR(100) NOT NULL,
    fecha_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
    estado BOOLEAN DEFAULT FALSE,

    FOREIGN KEY (id_usuario)
    REFERENCES Usuarios(id_usuario),

    FOREIGN KEY (id_chat)
    REFERENCES Chats(id_chat)
);

CREATE TABLE UsuariosPorChat(
    id_chat_usuario INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    id_chat INT,

    FOREIGN KEY (id_usuario)
    REFERENCES Usuarios(id_usuario),

    FOREIGN KEY (id_chat)
    REFERENCES Chats(id_chat)
);