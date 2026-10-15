CREATE TABLE usuario(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(100) NOT NULL,
);


CREATE TABLE turmas(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(20) NOT NULL,
    ano INT NOT NULL,
    periodo VARCHAR(20) NOT NULL,
    
);


CREATE TABLE eventos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(30) NOT NULL,
    descricao TEXT,
    data_evento DATE NOT NULL,
    horario TIME NOT NULL
);


CREATE TABLE horarios(
    id INT AUTO_INCREMENT PRIMARY KEY,
    turma_id INT NOT NULL,
    disciplina VARCHAR(30) NOT NULL,
    professor VARCHAR(100) NOT NULL,
    dia_semana VARCHAR(20) NOT NULL,
    hora_inicio TIME NOT NULL,
    hora_fim TIME NOT NULL

);


CREATE TABLE agenda(
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    titulo VARCHAR(20) NOT NULL,
    descricao TEXT,
    data_evento DATE NOT NULL,
    horario TIME NOT NULL,

);


CREATE TABLE aluno(
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    turma_id INT NOT NULL,
    numero_matricula VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE clubes(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    descricao TEXT,
    local VARCHAR(200) NOT NULL,
    horario TIME NOT NULL
);

CREATE TABLE achados_e_perdidos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    titulo VARCHAR(20) NOT NULL,
    descricao TEXT,
    local VARCHAR(200) NOT NULL,
    data_ocorrencia DATE NOT NULL,
    tipo VARCHAR(100) NOT NULL,
    status VARCHAR(100) NOT NULL
);

CREATE TABLE disciplinas(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    descricao TEXT
);