/*
Escreva uma função que pede ao usuário a **altura** e a **largura** (nessa ordem) de um retângulo 
e **imprime no console** a **área** do retângulo.

*/
/*
const altura = prompt("Insira valor de altura")
const largura = prompt("insira valor de largura")

function retangulo(altura,largura) {
    const calculaArea = altura * largura
    return calculaArea
}
console.log (retangulo(altura,largura)) 
*/

/*
Escreva uma função que pede ao usuário o ano atual e seu ano de nascimento e imprima no console sua idade.
*/
/*
const anoAtual = prompt("Em que ano estamos?")
const anoNascimento = prompt("Em que ano você nasceu?")

function idade (anoAtual,anoNascimento){
    const calculaIdade = anoAtual - anoNascimento
    return calculaIdade
}
console.log ("Você tem",idade(anoAtual,anoNascimento), "anos")
*/

/*
Escreva uma função que recebe o peso em kg e a altura em metros de uma pessoa e retorna o seu IMC (Índice de Massa Corpórea).
*/
/*
const peso = prompt("Quantos quilos você está pesando?")
const altura = prompt("Qual a sua altura? (Ex 1.65)")

function imc (peso,altura){
    const altura2 = altura ** altura
    calculaImc = peso / altura2
    return calculaImc 
}
console.log("O seu IMC é:", imc(peso,altura))
*/

/*
Escreva uma função que pede ao usuário seu **nome**, sua **idade** e seu **email** (nessa ordem), 
e imprime no console uma mensagem como a seguinte:

Meu nome é {nome}, tenho {idade} anos, e o meu email é {email}.
*/
/*
const nome = prompt("Qual o seu nome?")
const idade = prompt("Qual a sua idade?")
const email = prompt("Qual o seu email?")

function informacoes(nome,idade,email){
    return nome, idade, email
}
console.log("Meu nome é:", nome, ", tenho:", idade, "anos, e o meu email é:", email, ".")
*/

/*
Escreva uma função que pergunta ao usuário suas três cores favoritas e imprime no console um array que contenha essas três cores
*/
/*
const cor1 = prompt("Digite o nome de uma cor favorita")
const cor2 = prompt("Digite o nome de outra cor favorita")
const cor3 = prompt("Digite o nome de mais uma cor favorita")

function arrayDeCores (cor1, cor2, cor3){
    
}
*/

/*
Escreva uma função que recebe uma string e retorna ela em letra maiúscula.
*/
const palavra = prompt("insira uma palavra")

function maiuscula () {
    var palavra = palavra.toUpperCase
    return maiuscula
}
console.log(maiuscula)
