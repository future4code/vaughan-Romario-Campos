//Exercício
/*
a) Explique o que o código faz. Qual o teste que ele realiza? 
    O codigo pede ao usuario que digite um codigo, calcula se e divisivel por 2, e retorna se é par ou impar. 
b) Para que tipos de números ele imprime no console "Passou no teste"? 
    Para os casos em que o numero for par.
c) Para que tipos de números a mensagem é "Não passou no teste"?
    Para toda ocorrência de um numero impar.

2ª  Questão:
a) Para que serve o código acima?
    O codigo serve para informar ao cliente o preço das frutas, inclusive das não listadas no programa.
b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
    O preço da fruta Maçã é R$2.25
c) Considere que um usuário queira comprar uma `Pêra`, 
qual seria a mensagem impressa no console se retirássemos o 
`break` que está logo acima do `default` 
(o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
    O preço da fruta Pêra é R$5.5 
    O preço da fruta é R$5

3ª Questão:
a) O que a primeira linha está fazendo?
    Está pedindo que o usuário digite um numero, ja transformando string (que e o tipo do retorno do comando prompt), para number. 
b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
    Esse numero passou no teste
    (Se fosse -10) Essa mensagem é secreta !!!
c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
Ocorre um erro pois o console.log(mensagem) está fora do programa a ser executado.

*/ 

//Exercício Prático
//1ª Questão

const idadeDirigir = Number(prompt("Digite a sua Idade."))

if(idadeDirigir >= 18) {
    console.log("Você pode dirigir")
} 
else {
    console.log("Você não pode dirigir")
}


//2ª Questão

const turno = Number(prompt("Digite a letra correspondente ao turno que você estuda, M - Matutino, V - Vespertino e N - Noturno."))

function estudaTurno (M,V,N){
    if(M) {
        console.log(`${M} Bom dia! $`)
    } else if (V) {
        console.log(`${V} Boa tarde!`)
    } else if (N) {
        console.log(`${N} Boa noite`)
    } else {
        console.log(`Digite a letra correspondente ao turno que você estuda.`)
    }
}

//3ª Questão


