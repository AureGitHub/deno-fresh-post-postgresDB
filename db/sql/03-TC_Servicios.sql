DROP TABLE IF EXISTS T_Servicios;
DROP TABLE IF EXISTS T_Empleadas;
DROP TABLE  IF EXISTS T_tiposServiciosXPrecio;
DROP TABLE  IF EXISTS TC_tiposServicios;

CREATE TABLE T_Empleadas (
	id  serial PRIMARY KEY,	
	nombre varchar(255) NULL,	
	observacion varchar(255) NULL	
);

INSERT INTO T_Empleadas (nombre, observacion) values('Monse','');
INSERT INTO T_Empleadas (nombre, observacion) values('Pili','');
INSERT INTO T_Empleadas (nombre, observacion) values('Mari','');


CREATE TABLE TC_tiposServicios (
	id smallint PRIMARY KEY,
	descripcion varchar(255) NULL
);

insert into TC_tiposServicios values (1,'Ayuda domicilio');



CREATE TABLE T_Servicios (
	id  serial PRIMARY KEY,	
	fk_tipoServicio INT,
	fk_empleada INT,
	fecha timestamptz,
	horas INT,
	suplementoLevantar	BOOLEAN DEFAULT TRUE,
	Observaciones varchar(255) NULL,	
	pagado 	BOOLEAN DEFAULT FALSE,
	created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT fk_TC_tiposServicios FOREIGN KEY (fk_tipoServicio) REFERENCES TC_tiposServicios (id),
	CONSTRAINT fk_T_Empleadas FOREIGN KEY (fk_empleada) REFERENCES T_Empleadas (id)
);


INSERT INTO public.t_servicios
(fk_tiposervicio, fk_empleada,fecha, horas, suplementolevantar, observaciones, pagado, created_at, updated_at)
VALUES(1, 1,CURRENT_TIMESTAMP, 3, true, 'prueba', false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO public.t_servicios
(fk_tiposervicio, fk_empleada,fecha, horas, suplementolevantar, observaciones, pagado, created_at, updated_at)
VALUES(1, 2,CURRENT_TIMESTAMP, 3, false, 'prueba 1', false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);



CREATE TABLE T_tiposServiciosXPrecio (
	id  serial PRIMARY KEY,	
	fk_tipoServicio INT,
	precio real,
	CONSTRAINT fk_TC_tiposServicios FOREIGN KEY (fk_tipoServicio) REFERENCES TC_tiposServicios (id)
);


INSERT INTO public.t_tiposserviciosxprecio
(fk_tiposervicio, precio)
VALUES(1, 8);









