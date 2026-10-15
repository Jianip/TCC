INSERT INTO usuario (nome, email, senha) VALUES
('Jian', 'jian@gmail.com', '********'),
('Aila', 'aila@gmail.com', '********'),
('Ralyana', 'ralyana@gmail.com', '********');


INSERT INTO turmas (nome, ano, periodo) VALUES
('9.1', 2026, 'Matutino'),
('9.2', 2026, 'Matutino'),
('1.1', 2026, 'Matutino'),
('1 Técnico', 2026, 'Integral'),
('1.2', 2026, 'Matutino'),
('2.1', 2026, 'Matutino'),
('2 Técnico', 2026, 'Integral'),
('3.1', 2026, 'Matutino'),
('3 Técnico', 2026, 'Integral'),
('3.2', 2026, 'Matutino');


INSERT INTO eventos
(titulo, descricao, data_evento, horario) VALUES
('Feira de Ciências', 'Exposição dos projetos dos alunos.',
 '2026-10-20', '09:00:00'),
('Jogos Escolares', 'Competições esportivas entre as turmas.',
 '2026-10-23', '08:00:00'),
('Apresentação dos TCCs', 'Apresentação dos trabalhos de conclusão de curso.',
 '2026-11-25', '10:00:00');


INSERT INTO disciplinas (nome, descricao) VALUES
('Matemática', 'Estudo de álgebra, geometria e estatística.'),
('Português', 'Leitura, interpretação e produção de textos.'),
('História', 'Estudo dos acontecimentos históricos.'),
('Geografia', 'Estudo do espaço geográfico e da sociedade.'),
('Programação', 'Lógica de programação e desenvolvimento de sistemas.'),
('Banco de Dados', 'Modelagem e manipulação de bancos de dados.');


INSERT INTO horarios
(turma_id, disciplina, professor, dia_semana, hora_inicio, hora_fim) VALUES
(3, 'Matemática', 'lohran', 'Segunda-feira', '07:00:00', '07:50:00'),
(3, 'Português', 'lohran', 'Segunda-feira', '07:50:00', '08:40:00'),
(4, 'Programação', 'lohran', 'Terça-feira', '07:00:00', '07:50:00'),
(7, 'Banco de Dados', 'lohran', 'Quarta-feira', '08:40:00', '09:30:00'),
(9, 'Programação', 'lohran', 'Quinta-feira', '10:35:00', '11:25:00'),
(10, 'História', 'lohran', 'Sexta-feira', '11:25:00', '12:15:00');


INSERT INTO aluno (usuario_id, turma_id, numero_matricula) VALUES
(1, 9, '1'),
(2, 9, '2'),
(3, 9, '3');


INSERT INTO agenda
(usuario_id, titulo, descricao, data_evento, horario) VALUES
(1, 'Entrega do TCC', 'Apresentação do Trabalho de Conclusão de Curso.',
 '2026-11-25', '10:00:00'),
(2, 'Prova de Matemática', 'Revisar os conteúdos trabalhados em sala.',
 '2026-10-15', '07:00:00'),
(3, 'Reunião do grupo', 'Organizar os slides da apresentação do TCC.',
 '2026-11-18', '14:00:00');


INSERT INTO clubes (nome, descricao, local, horario) VALUES
('Clube de Leitura', 'Leitura e discussão de livros.',
 'Biblioteca', '12:15:00'),
('Clube de Robótica', 'Desenvolvimento de projetos de robótica.',
 'Laboratório de Informática', '13:00:00'),
('Clube de Xadrez', 'Prática de xadrez e torneios entre alunos.',
 'Sala de Convivência', '12:15:00');


INSERT INTO achados_e_perdidos
(usuario_id, titulo, descricao, local, data_ocorrencia, tipo, status) VALUES
(1, 'Estojo azul', 'Estojo azul com lápis e canetas.',
 'Sala 3', '2026-09-28', 'Achado', 'Aguardando retirada'),
(2, 'Garrafa preta', 'Garrafa térmica preta com adesivo.',
 'Quadra', '2026-09-29', 'Perdido', 'Em busca'),
(3, 'Caderno vermelho', 'Caderno de dez matérias encontrado na biblioteca.',
 'Biblioteca', '2026-09-29', 'Achado', 'Devolvido');