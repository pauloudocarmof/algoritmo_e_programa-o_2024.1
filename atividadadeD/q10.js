//10. Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida.
import { question } from "readline-sync"

function main (){
    const dia = pedir_data('Informe dia: ')
    const mes = pedir_data('Informe mesa: ')
    const ano = pedir_data('Informe ano: ')
    verificacao_data(dia,mes,ano)
}
function pedir_data(mensagem) {
    const n = Number(question(mensagem))
    return n
}


    



function verificacao_data(dia,mes,ano){
    if  (mes > 12 || mes === 0 ){
        print('DATA INVALIDA')
    }else if (dia > 31 || dia === 0 ){
        print('DATA INVALIDA')
    }
    else {
        print('DATA VALIDA')
    }
}
function print(mensagem){
    console.log(mensagem)
}

main ()
