/*
•	Exercício 2
Escreva uma função que pede ao usuário o ano atual e seu ano de nascimento e 
imprima no console sua idade.
o	Dica
Você pode desconsiderar o mês de nascimento da pessoa. Ou seja,
assuma que ela já fez aniversário no ano atual.
Além disso, as perguntas devem ser feitas na ordem indicada!

Exemplo 1
Entradas
ano atual: 2020
ano de nascimento: 1990
*/


//var a = prompt("insira o ano atual")
//var b = prompt("Insira o ano que você nasceu")

/*
function idade (anoAtual, anoNascimento) {
  a = anoAtual
  b = anoNascimento
  const idadeAtual = (anoAtual - anoNascimento)
    return  idadeAtual
  }
console.log(idade(2020,1990));
*/

/*
function cumprimentar(pessoa){
	console.log(`Olá ${pessoa}! =)`)
}
const pessoa = prompt("Seu nome:")
cumprimentar(pessoa)
//cumprimentar("nome1") ou assim!
*/

/*

•	Exercício 1
Escreva uma função que pede ao usuário a altura e a largura (nessa ordem) de um retângulo e imprime no console a área do retângulo.
 
Entradas
altura: 3
largura: 5
Saída
15

function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
  const areaRetangulo = altura * largura
  return (areaRetangulo)
 }
 console.log(calculaAreaRetangulo(3,5));
*/


//
/*
•	Exercício 2
Escreva uma função que pede ao usuário o ano atual e seu ano de nascimento e imprima no console sua idade.
o	Dica
Você pode desconsiderar o mês de nascimento da pessoa. Ou seja, assuma que ela já fez aniversário no ano atual.
Além disso, as perguntas devem ser feitas na ordem indicada!
o	Exemplo 1
Entradas
ano atual: 2020
ano de nascimento: 1990
Saída
30

function imprimeIdade(anoAtual, anoNascimento) {
  // implemente sua lógica aqui
  const idadeAtual = (anoAtual - anoNascimento)
  return  idadeAtual

}
console.log("Idade", imprimeIdade(2020, 1990));
*/

/*
•	Exercício 3
Escreva uma função que recebe o peso em kg e a altura em metros de uma pessoa e retorna o seu IMC (Índice de Massa Corpórea).
o	Dica
O IMC pode ser calculado de acordo com a fórmula a seguir:
IMC = Peso ÷ (Altura × Altura)
Como essa conta não dá números exatos, serão aceitas respostas com uma diferença de 0.1 do valor esperado. Por exemplo, 
se o esperado para uma entrada específica era 21.6, serão aceitas respostas entre 21.5 e 21.7.
o	Exemplo 1
Entradas
peso: 85
altura: 1.8
Saída (aproximada)
26.2
o	Exemplo 2
Entradas
peso: 70
altura: 1.65
Saída
25.7

function calculaIMC(peso, alturaC) {
  // implemente sua lógica aqui
  const imc = (peso / (alturaC ** alturaC)) 
  return imc
}
console.log("IMC", calculaIMC(85, 1.8))
*/

/*
•	Exercício 4
Escreva uma função que pede ao usuário seu nome, sua idade e seu email (nessa ordem), 
e imprime no console uma mensagem como a seguinte:
Meu nome é {nome}, tenho {idade} anos, e o meu email é {email}.
o	Exemplo 1
Entradas
nome: "Alice"
idade: 28
email: "alice@gmail.com"
Saída (aproximada)
Meu nome é Alice, tenho 28 anos, e o meu email é alice@gmail.com
*/



function identificacao (nome,idade,email) {
  
  return  identificacao
  }
  const idade = prompt("seu nome")
  identificacao(nome)
  console.log(`Seu nome é ${nome}, você tem ${idade} anos, e o seu email é ${email}`)
  /*
  console.log(`Seu nome é ${nome}, você tem ${idade} anos, e o seu email é ${email}`)
  const idade = prompt("sua idade")
  identificacao(idade)
  const email = prompt("seu email")
  identificacao(email)
 */
  /*
  function cumprimentar(pessoa){
    console.log(`Olá ${pessoa}! =)`)
  }
  const pessoa = prompt("Seu nome:")
  cumprimentar(pessoa)
*/



/*
•	Exercício 5
Escreva uma função que pergunta ao usuário suas três cores favoritas e imprime no console um array que contenha essas três cores.
o	Exemplo 1
Entradas
cor1: "Azul"
cor2: "Amarelo"
cor3: "Vermelho"
Saída
["Azul", "Amarelo", "Vermelho"]
o	Exemplo 2
Entradas
cor1: "Laranja"
cor2: "Roxo"
cor3: "Preto"
Saída
["Laranja", "Roxo", "Preto"]
*/
/*
function cumprimentar(pessoa){

	console.log(`Olá ${pessoa}! =)`)
}
//cumprimentar("nome1")
//cumprimentar("nome2")
//cumprimentar("nome3")

const pessoa = prompt("Seu nome:")
cumprimentar(pessoa)
*/


/*  RESOLVIDO
•	Exercício 6
Escreva uma função que recebe uma string e retorna ela em letra maiúscula.
o	Exemplo 1
Entradas
string: "oi"
Saída
"OI"
o	Exemplo 2
Entradas
string: "bAnAnA"
Saída
"BANANA"
*/


/*
•	Exercício 7
Escreva uma função que recebe o custo de um espetáculo de teatro e o valor de cada ingresso 
(considere que todos os ingressos têm o mesmo preço) 
e retorna quantos ingressos precisam ser vendidos para que o espetáculo não dê prejuízo.
o	Exemplo 1
Entradas
custo: 3000
valor de cada ingresso: 100
Saída
30
o	Exemplo 2
Entradas
custo: 5500
valor de cada ingresso: 50
Saída
110
*/

/*
const pokemons = [
  {nome: 'Bulbasaur', tipo 'grama'},
  {nome: 'Charmander', tipo 'fogo'},
  {nome: 'Sqirtle', tipo: 'agua'}
]
for (const pkmn of pokemons) {
  console.log(`${pkmn.nome} é de ${pkmn.tipo}`)
}
*/


/*
•	Exercício 8
Escreva uma função que recebe duas strings e retorna um booleano (true ou false) indicando se elas possuem o mesmo tamanho.
o	Exemplo 1
Entradas
string1: "ola"
string2: "abc"
Saída
true
o	Exemplo 2
Entradas
string1: "teste"
string2: "porta"
Saída
true
o	Exemplo 3
Entradas
string1: "abc"
string2: "abcd"
Saída
false
*/


/*
•	Exercício 9
Escreva uma função que recebe um array e retorna o primeiro elemento.
o	Exemplo 1
Entradas
array: [1, 2, 3]
Saída
1
o	Exemplo 2
Entradas
array: ["Laranja", "Banana", "Maçã"]
Saída
"Laranja"
*/


/*
•	Exercício 10
Escreva uma função que recebe um array e retorna o último elemento.
o	Exemplo 1
Entradas
array: [1, 2, 3, 4, 5]
Saída
5
o	Exemplo 2
Entradas
array: ["Laranja", "Banana", "Maçã"]
Saída
"Maçã"
*/


/*
•	Exercício 11
Escreva uma função que recebe um array e retorna um array com o primeiro e o último elemento trocados.
o	Exemplo 1
Entradas
array: [1, 2, 3, 4, 5]
Saída
[5, 2, 3, 4, 1]
o	Exemplo 2
Entradas
array: ["Laranja", "Banana", "Maçã"]
Saída
["Maçã", "Banana", "Laranja"]
*/



/*
•	Exercício 12
Escreva uma função que recebe duas strings e retorna um booleano (true ou false) 
indicando se elas são iguais, desconsiderando letras maiúsculas ou minúsculas.
o	Exemplo 1
Entradas
string1: "Ola"
string2: "olA"
Saída
true
*/



/*
🏅 DESAFIOS
•	Exercício 13
Escreva uma função que pergunta ao usuário o ano atual, o ano de nascimento de uma pessoa, 
e o ano em que sua carteira de identidade foi emitida (nessa ordem). 
A função deve imprimir no console um booleano (true ou false) 
que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:
o	Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos 
(se for exatamente 5 anos, deve ser renovada).
o	Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos 
(se for exatamente 10 anos, deve ser renovada).
o	Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos
o	Dica
Você deve usar comparadores e operadores booleanos para avaliar as condições. 
Para te ajudar a organizar a lógica, tente criar 3 variáveis separadas, uma para cada condição, e depois compará-las.
o	Exemplo 1
Entradas
ano atual: 2020
ano de nascimento: 2000
ano de emissao do RG: 2015
Saída
true

•	Exercício 14
Escreva uma função que recebe um ano e retorna um booleano (true ou false) que indica se o ano é bissexto. 
Um ano é bissexto de acordo com as seguintes condições:
o	São bissextos todos os anos múltiplos de 400**.**
o	São bissextos todos os múltiplos de 4, exceto se for múltiplo de 100 mas não de 400**.**
o	Não são bissextos todos os demais anos.
o	Dica
Você deve usar comparadores e operadores booleanos para avaliar as condições. 
Para te ajudar a organizar a lógica, tente criar 3 variáveis separadas, uma para cada condição, e depois compará-las.
o	Exemplo 1
Entradas
ano: 2000
Saída
true

•	Exercício 15
Escreva uma função que faz as seguintes perguntas ao usuário 
(condições para ser uma pessoa estudante da Labenu):
o	Você tem mais de 18 anos?
o	Você possui ensino médio completo?
o	Você possui disponibilidade exclusiva durante os horários do curso?
O usuário deve responder essas perguntas com "sim" ou "nao".
A função deve imprimir no console um booleano (true ou false) 
que indica se a inscrição para o curso é válida, ou seja, 
se o usuário pode ou não fazer o curso da Labenu. 
A inscrição é válida quando todas as respostas para todas as perguntas for positiva.
o	Exemplo 1
Entradas
tem mais de 18?: "sim"
tem ensino médio completo?: "sim"
tem disponibilidade de horários?: "sim"
Saída
true

*/