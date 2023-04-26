
DROP TABLE IF EXISTS T_Users;
DROP TABLE  IF EXISTS TC_userEstados;
DROP TABLE  IF EXISTS TC_userPerfiles;






CREATE TABLE TC_userEstados (
	id smallint PRIMARY KEY ,
	descripcion varchar(255) NULL
);

insert into TC_userEstados values (1,'activo');
insert into TC_userEstados values (2,'inactivo');
insert into TC_userEstados values (3,'bloqueado');





CREATE TABLE TC_userPerfiles (
	id smallint PRIMARY KEY,
	descripcion varchar(255) NULL
);

insert into TC_userPerfiles values (1,'super');
insert into TC_userPerfiles values (2,'admin');
insert into TC_userPerfiles values (3,'normal');



CREATE TABLE T_Users (
	id  serial PRIMARY KEY,	
	"name" varchar(255) NULL,
	email varchar(255) NOT NULL UNIQUE,
	"password" varchar(255) NULL,	
	fk_estado INT,
	fk_perfil INT,
	created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT fk_TC_userEstados FOREIGN KEY (fk_estado) REFERENCES TC_userEstados (id),
	CONSTRAINT fk_TC_userPerfiles FOREIGN KEY (fk_perfil) REFERENCES TC_userPerfiles (id)

);



INSERT INTO public.t_users
("name", email, "password", fk_estado, fk_perfil, created_at, updated_at)
VALUES('Aure', 'aure.desande@gmail.com', 'jas11jas11', 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);