/*/8. Leia data atual (dia, mês e ano) e data de nascimento (dia, mês e ano) de uma pessoa, calcule e escreva
sua idade exata (em anos)./*/

import { question } from "readline-sync"

function main() {
    const data_atual_dia = pedir_data('Informe data atual(dia)')
    const data_atual_mes = pedir_data('Informe data atual(mes)')
    const data_atual_ano = pedir_data('Informe data atual(ano)')
    console.log('---------------------------')
    const data_nascimento_dia= pedir_data('Informe data de nascimento(dia): ')
    const data_nascimento_mes = pedir_data('Informe data de nascimento(mes): ')
    const data_nascimento_ano = pedir_data('Informe data de nascimento(ano): ')
calcular_idade(data_atual_mes, data_nascimento_mes, data_atual_ano, data_nascimento_ano)
}

function print(mensagem){
    console.log(mensagem)
}
function pedir_numero(mensagem){
    const n = Number(question(mensagem))
    return n 
}
function pedir_data(mensagem){
    const d = Number(question(mensagem))
    return d
}


function calcular_idade(data_atual_mes, data_nascimento_mes,data_atual_ano, data_nascimento_ano){
   const n = (data_atual_mes * 30) / 360
   const n2 = (data_nascimento_mes * 30) / 360
   const resultado = Math.floor((data_atual_ano + n )  - (data_nascimento_ano + n2))
   
   print(`Voce tem atualmente: ${resultado} anos `)

}

main()