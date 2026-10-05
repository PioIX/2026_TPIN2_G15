INSERT INTO Usuarios (username, mail, contrasena, foto)
VALUES
('Juan', 'juan@gmail.com', '1234', 'juan.jpg'),
('Benjamin', 'benjamin@gmail.com', '1234', 'benjamin.jpg'),
('Camila', 'camila@gmail.com', '1234', 'camila.jpg'),
('Bautista', 'bautista@gmail.com', '1234', 'bautista.jpg');


INSERT INTO Chats (tipo_chat, foto, nombre_grupo)
VALUES
(FALSE, NULL, NULL),
(FALSE, NULL, NULL),
(TRUE, 'grupo1.jpg', 'Grupo del TP');


INSERT INTO UsuariosPorChat (id_usuario, id_chat)
VALUES
-- Chat 1: Juan y Benjamin
(1, 1),
(2, 1),

-- Chat 2: Camila y Bautista
(3, 2),
(4, 2),

-- Chat 3: Grupo con los cuatro
(1, 3),
(2, 3),
(3, 3),
(4, 3);


INSERT INTO Mensajes (id_usuario, id_chat, contenido, estado)
VALUES
-- Chat Juan - Benjamin
(1, 1, 'Hola Benjamin!', TRUE),
(2, 1, 'Hola Juan, todo bien?', TRUE),
(1, 1, 'Si, todo bien.', TRUE),

-- Chat Camila - Bautista
(3, 2, 'Hola Bautista!', TRUE),
(4, 2, 'Hola Camila!', TRUE),

-- Grupo
(1, 3, 'Hola grupo!', TRUE),
(2, 3, 'Que onda?', TRUE),
(3, 3, 'Todo bien por aca.', TRUE),
(4, 3, 'Vamos con el TP.', TRUE);