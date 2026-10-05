-- Se borran en este orden por las claves foráneas.
-- Si no querés perder datos al volver a correr el script, borrá estas 4 líneas.
DROP TABLE IF EXISTS Mensajes;
DROP TABLE IF EXISTS UsuariosPorChat;
DROP TABLE IF EXISTS Chats;
DROP TABLE IF EXISTS Usuarios;

CREATE TABLE Usuarios(
   id_usuario INT AUTO_INCREMENT PRIMARY KEY,
   nombre VARCHAR(50) NOT NULL,
   mail VARCHAR(100) UNIQUE NOT NULL,
   contrasena VARCHAR(100) NOT NULL,
   num_telefono VARCHAR(20),
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
   FOREIGN KEY(id_usuario) REFERENCES Usuarios(id_usuario),
   FOREIGN KEY(id_chat) REFERENCES Chats(id_chat)
);

CREATE TABLE UsuariosPorChat(
   id_chat_usuario INT AUTO_INCREMENT PRIMARY KEY,
   id_usuario INT,
   id_chat INT,
   FOREIGN KEY(id_usuario) REFERENCES Usuarios(id_usuario),
   FOREIGN KEY(id_chat) REFERENCES Chats(id_chat)
);


-- =========================================================
-- DATOS DE EJEMPLO
-- =========================================================

-- Usuarios (foto NULL: el frontend muestra la foto por defecto)
INSERT INTO Usuarios (nombre, mail, contrasena, num_telefono, foto) VALUES
('Ana', 'ana@pioix.edu.ar', '1234', '1155550001', NULL),
('Luis', 'luis@pioix.edu.ar', '1234', '1155550002', NULL);

-- Chat individual entre Ana (1) y Luis (2)
INSERT INTO Chats (tipo_chat, foto, nombre_grupo) VALUES
(FALSE, NULL, NULL);

-- Participantes del chat 1
INSERT INTO UsuariosPorChat (id_usuario, id_chat) VALUES
(1, 1),
(2, 1);

-- Mensajes del chat 1
INSERT INTO Mensajes (id_usuario, id_chat, contenido) VALUES
(1, 1, 'Hola Luis, ¿cómo andás?'),
(2, 1, 'Hola Ana, todo bien. ¿Y vos?'),
(1, 1, 'Bien, probando el Pio Chat');