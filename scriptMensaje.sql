INSERT INTO mensaje (nombre,descripcion, gravedad) 
VALUES ('LONG_64','- longitud excede lo permitido(64)',1);

INSERT INTO mensaje (nombre,descripcion, gravedad) 
VALUES ('LONG_128','- longitud excede lo permitido(128)',1);

INSERT INTO mensaje (nombre,descripcion, gravedad) 
VALUES ('INPUT_EMPTY','- no se permite vacio',1);

INSERT INTO mensaje (nombre,descripcion, gravedad) 
VALUES ('DOBLE_KEY','- Ya existe un registro con este valor',1);

INSERT INTO mensaje (nombre,descripcion, gravedad) 
VALUES ('SUCCESS_SAVE','- Guardado exitosamente',0);

INSERT INTO mensaje (nombre,descripcion, gravedad) 
VALUES ('FAILED_SAVE','- Guardado ha fallado ',2);

INSERT INTO mensaje (nombre,descripcion, gravedad) 
VALUES ('INVALID_CHAR','- Caracteres invalidos',1);

INSERT INTO mensaje (nombre,descripcion, gravedad) 
VALUES ('WUT','- WUT',4);