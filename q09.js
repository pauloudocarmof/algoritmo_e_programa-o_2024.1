import { question } from "readline-sync"

/*9. Leia 1 (um) número entre 0 e 100, verifique e escreva se o número é ou não primo./***/
function main (){
    const numero = pedir_numero('Informe um numero: ')
    verificacao_primo(numero)
}
function pedir_numero(mensagem) {
    const n = Number(question(mensagem))
    return n
}

function verificacao_primo(numero){
    if  (numero <= 1 ){
        print('Não é primo')
    }else if (numero <= 3){
        print('Numero primo')
    }else if (numero % 2 === 0 || numero % 3 === 0){
        print('Numero NÃO primo')
    }else {
        print('Numero primo! ')
    }
}
function print(mensagem){
    console.log(mensagem)
}

main ()