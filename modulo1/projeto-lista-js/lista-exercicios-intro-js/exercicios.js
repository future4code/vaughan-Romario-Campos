// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
  const areaRetangulo = altura * largura
  return (areaRetangulo)
 }
 console.log("Retangulo", calculaAreaRetangulo(3,5));
  
// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
  // implemente sua lógica aqui
  const idadeAtual = (anoAtual - anoNascimento)
  return  idadeAtual

}
console.log("Idade", imprimeIdade(2020, 1990));

// EXERCÍCIO 03
function calculaIMC(peso, alturaC) {
  // implemente sua lógica aqui
  const imc = (peso / (alturaC ** alturaC)) 
  return imc
}
console.log("IMC", calculaIMC(85, 1.8))

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  function cumprimentar(pessoa){
    console.log(`Olá ${pessoa}! =)`)
  }
  cumprimentar("nome1")
//  cumprimentar("nome2")
// cumprimentar("nome3")
  
  //const pessoa = prompt("Seu nome:")
  //cumprimentar(pessoa)
}
//console.log(imprimeInformacoesUsuario(alice, 28, alice@gmail.com));
//console.log(informacoesUsuario("Meu nome é", alice, "tenho", 28, "anos, e o meu email é", alice@gmail.com));



// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const CorFavorita1 = prompt('Digite uma cor favorita!')
  const CorFavorita2 = prompt('Digite segunda cor favorita!')
  const CorFavorita3 = prompt('Digite terceira cor favorita!')
  //console.log(CorFavorita1,CorFavorita2,CorFavorita3);
  console.log(CorFavorita1,CorFavorita2,CorFavorita3);

  }
imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  string = string.toUpperCase()
  return string
}


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}