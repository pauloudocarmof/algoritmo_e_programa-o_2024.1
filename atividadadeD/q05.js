//5. Leia 3 (três) números e escreva-os em ordem crescente.
import { question} from "readline-sync";
function main(){
    const numero1 = get_number('Informe o primeiro numero: ')
    const numero2 = get_number('Informe o segundo numero: ')
    const numero3 = get_number('Informe o terceiro numero: ')
    let maior = numero1
    let intermediario = numero2
    let menor = numero3
    if (numero2 > numero1){
        maior = numero2
    }else if (numero2 < numero3){
        maior = numero3
    }

    if (numero2 < menor){
        menor = numero2
    }else if (numero2 > menor & numero2 < maior ){
       intermediario = numero2
    }

    if (numero3 < numero1 & numero3 < numero2){
        menor = numero3
    }else if (numero2 < numero1 & numero2 < numero3 ){
        menor = numero2
    }else {menor = numero3}
print(maior)
print(intermediario)
print(menor)
}
function get_number(mensagem){
        const n = Number(question(mensagem))
        return n
}
main()

function print(mensagem){
    console.log(mensagem)
}