

DROP TABLE  IF EXISTS TC_tiposGastos;

CREATE TABLE TC_tiposGastos (
	id smallint PRIMARY KEY,
	descripcion varchar(255) NULL
);

insert into TC_tiposGastos values (1,'Compra');
insert into TC_tiposGastos values (2,'Comida Pisos T');



