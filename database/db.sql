CREATE DATABASE chatauth;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(80),
    username VARCHAR(50),
    password VARCHAR(40),
    role SMALLINT,
    UNIQUE (username)
);

CREATE TABLE roles (
    code SERIAL PRIMARY KEY,
    name VARCHAR(20)
);

INSERT INTO roles (name) VALUES 
    ('Estudiante'), 
    ('Moderador');


INSERT INTO users (name, username, password, role) values 
    ('Yeison', 'YQuiroga', '12345', 1),
    ('Luisa', 'FLuisa', '12345', 1),
    ('Viviana', 'QViviana', '09876', 2);


alter table users
   add constraint FK_users_coderole
   foreign key (role)
   references roles(code);