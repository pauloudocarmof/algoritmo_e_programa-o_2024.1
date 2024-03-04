import { question } from "readline-sync";
function main() {
    print('Maior ou Menor?')
    const numero1 = get_number("Informe numero 1: ")
    const numero2 = get_number("Informe numero 2: ")

    if (numero1 > numero2) {
        print('O numero 1 e maior!')
    }else if (numero1 === numero2) {
        print ('Ambos são iguais!')
    }else if (numero1 < numero2){
        print('O numero 1 é menor que o número 2!')
    }
}
function get_number(mensagem) {
    const n = Number(question(mensagem))
    return n
}
function print(texto) {
    console.log(texto)
}
main()

//uma função só pode ser atribuida a uma variavel se tiver retorno 
//os parametros são variaveis que existem apenas dentro da função