/*7. Leia 3 (três) números (cada número corresponde a um lado do triângulo), verifique e escreva se os 3
(três) números formam um triângulo (a soma de dois lados não pode ser menor que o terceiro lado). Se
formam, verifique se formam um triângulo equilátero (3 lados iguais), isósceles (2 lados iguais) ou
escaleno (3 lados diferentes). Não existe lado com tamanho 0 (zero)/*/

import { question } from "readline-sync";
function main(){


const lado1 = pedir_numero('Informe lado 1: ')
const lado2 = pedir_numero('Informe lado 2: ')
const lado3 = pedir_numero('Informe lado 3: ')


let  forma_triangulo 
let existencia_triangulo

if (lado1 === 0 || lado2 === 0 || lado3 === 0 ){
    console.log(existencia_triangulo = 'TRIANGULO INEXISTENTE!')
}
else if (lado1 + lado2 < lado3){
    console.log(forma_triangulo = ('Nao forma triangulo'))
} else if (lado1 + lado3 < lado2){
    console.log(forma_triangulo = ('Nao forma triangulo'))
}else if (lado2 + lado3 < lado1){
    console.log(forma_triangulo = ('Nao forma triangulo'))
}else {
    console.log (forma_triangulo = ('Forma triangulo'))
}

let tipo_triangulo
if (existencia_triangulo === "TRIANGULO INEXISTENTE!"){
    console.log()
}
else if (lado1 === lado2 & lado2 === lado3 & lado1 === lado3){
    console.log(tipo_triangulo = ('Triangulo equilatero!'))
}else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3){
    console.log(tipo_triangulo = ('Triangulo isoceles!'))
}else{
    console.log(tipo_triangulo = ('Triangulo escaleno!'))
}
}

function pedir_numero(mensagem){
    const n = Number(question(mensagem))
    return n
}

function print(mensagem) {
    console.log(mensagem)
}

main()