Create TABLE Usuarios(
   id_usuario INT AUTO_INCREMENT PRIMARY KEY,
   nombre varchar(50) not null,
   apellido varchar(50) not null,
   mail varchar(100) unique not null,
   contrasena varchar(100) not null,
   num_telefono int
);

create table Chats(
id_chat INT AUTO_INCREMENT PRIMARY KEY,
tipo_chat boolean default false,
fecha_creado datetime default current_timestamp,
foto varchar(100),
nombre_grupo varchar(100)
);

Create table Mensajes(
id_mensaje INT AUTO_INCREMENT PRIMARY KEY,
id_usuario int,
id_chat int,
contenido varchar(100) not null,
fecha_hora  DATETIME DEFAULT CURRENT_TIMESTAMP,
estado boolean default false,

foreign key(id_usuario)
references Usuarios(id_usuario),
foreign key(id_chat)
references Chats(id_chat)
);


create table UsuariosPorChat(
id_chat_usuario INT AUTO_INCREMENT PRIMARY KEY,
id_usuario INT,
id_chat INT,
foreign key(id_usuario)
references Usuarios(id_usuario),
foreign key(id_chat)
references Chats(id_chat)
);

