/*Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente
do algarismo da unidade./**/
import { question } from "readline-sync";
function main (){
    //entrada
    const numero = get_number('Informe o numero(dezena: )')
    //processamento e saida
    let algarismo_dezena = Math.floor(numero / 10)
    let algarismo_unidade = numero - (algarismo_dezena * 10)
   
    if (algarismo_dezena === algarismo_unidade){
        print('O algarismo da dezena é IGUAL ao da unidade')
    }else if (algarismo_dezena != algarismo_unidade){
        print('O algarismo da dezena é DIFERENTE do algarismo da unidade')
    }
   
 
    
}
function print(mensagem){
    console.log(mensagem)
}

function get_number(mensagem){
   const n = Number(question(mensagem))
    return n
}
main()