//Leia 3 (três) números, verifique e escreva o maior entre os números lidos.
import { question } from "readline-sync";
function main() {
    print ('Maior ou menor?')
    let maior 
    let menor
    //entrada
    const numero1 = get_number('Informe numero 1: ')
    const numero2 = get_number('Informe numero 2: ')
    const numero3 = get_number('Informe numero 3: ')
 
    maior = numero1
    menor = numero2
    //processamento

    if (numero2 > maior) {
        maior = numero2
    }else if (numero3 > maior) {
        maior = numero3
    }
    
    if (numero1 < menor) { 
        menor = numero1
    }else if (numero3 < menor){
        menor = numero3}
    
    //saida
    
        print(`--------------------------`)
        print(`O MAIOR numero e: ${maior}`)
        print(`O MENOR numero e: ${menor}`)
        print(`--------------------------`)

}
function print(mensagem) {
    console.log(mensagem)
}

function get_number(mensagem) {
    const n = Number(question(mensagem))
    return n
}
main()