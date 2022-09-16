# Cadastro Hotel DoDev

Um hotel deve possuir: id, nome, categoria, endereço e telefone;
Uma reserva deve possuir: id, id do hotel, nome do responsável, dia de entrada e
dia de saída;
1. Criar funções para cadastrar um hotel e uma reserva;
2. Criar uma função que recebe como parâmetro o id do hotel e exibe na tela todas as
reservas neste hotel com as seguintes informações: nome do hotel - nome do
responsável da reserva - dia de entrada - dia de saída
3. Criar uma função que recebe como parâmetro o id de uma reserva e exibe no
console: nome do hotel - endereço - dia de entrada - dia de saída
4. Criar uma função que recebe como parâmetro o nome de uma pessoa e exibe na
tela todas as suas reservas;
5. Criar uma função que recebe como parâmetro uma categoria e retorna um array
com todos os hotéis nessa categoria;
6. Criar uma função que recebe o id de um hotel e um telefone como parâmetro, a
função deve atualizar o telefone de cadastro com o do parâmetro
Algumas validações devem ser feitas na hora de fazer os cadastros:
● O id não pode ser igual a nenhum outro já existente;
● O dia de entrada não pode ser maior que o de saída;
● No cadastro de uma reserva o id do hotel deve ser válido, ou seja, não deve permitir
o cadastro de um hotel que não esteja no sistema;