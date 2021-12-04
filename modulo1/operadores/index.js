//1ª Questão:

/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)
*/

//2ª Questão:
//R: Não realiza a soma, pois comando Prompt retorna como sendo caractere do tipo texto. 

//3ª Questão:
// Sugestão de codigo:
/*
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const numeroUm = parseInt(primeiroNumero);
const numeroDois = parseInt(segundoNumero);

const soma = numeroUm + numeroDois

console.log(soma)
*/

//EXERCICIO DE ESCRITA DE CODIGO 

// 1º

/*
let suaIdade = prompt("Qual a sua Idade?");
let idadeAmiga = prompt("Qual a idade da sua melhor amiga?");

const idadeSua = parseInt(suaIdade);
const amigaIdade = parseInt(idadeAmiga);

const maisVelho = idadeSua > amigaIdade;
const diferencaIdade = (idadeSua - amigaIdade)

console.log("Sua idade é maior que a do seu melhor amigo(a):" , maisVelho, "Diferença de idade" , diferencaIdade, "anos");
*/

// 2º
/*
let numeroPar = prompt("Insira um número par!")
let parNumero = parseInt(numeroPar)

console.log (parNumero / 2); // mostra sempre o resultado inteiro.
//Dividindo por um numero impar aparece o resultado com casa depois da virgula (ponto).

*/

// 3º

/*
let usuarioIdade = prompt("Insira a sua idade em Anos");
let idadeUsuario = parseInt(usuarioIdade);

const idadeMeses = (idadeUsuario * 12);
const idadeDias = (idadeMeses * 365);
const idadeHoras = (idadeDias * 24)

console.log ("A sua idade em meses é:", idadeMeses, "A sua idade em dias é:", idadeDias, "A sua idade em horas é:", idadeHoras);
*/

// 4º
/*
let primeiroNum = prompt("Digite um numero!")
let segundoNum = prompt("Digite outro numero!")

const numUm = parseInt(primeiroNum);
const numDois = parseInt(segundoNum);

const primeiroMaior = numUm > numDois;
const primeiroIgual = numUm === numDois;
const primDivSegundo = numUm % numDois;
const segNumDivprimeiro = numDois % numUm;


const divUm = primDivSegundo === 0;
const divDois = segNumDivprimeiro ===0;


console.log ("Primeiro Numero!:" ,numUm, "Segundo Número!", numDois),
console.log ("O primeiro numero é maior que segundo?", primeiroMaior);
console.log ("O primeiro numero é igual ao segundo?", primeiroIgual);
console.log ("O primeiro numero é divisível pelo segundo?", divUm);
console.log ("O segundo numero é divisível pelo primeiro?", divDois);
*/



function soma(a,b){return a-b;} 
console.log(soma(10,20));


/*
function multiplica() {
    return num1 * num2;
  }
  console.log(multiplica(10,20));
*/

/*
var num1 = 10
var num2 = 20
var multiplica = (num1*num2)

console.log(multiplica)
*/
/*
var num1 = 10
var num2 = 20
var subtracao = (num2-num1)

console.log(subtracao);
*/