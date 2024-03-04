/*6. Leia 3 (três) números (cada número corresponde a um ângulo interno do triângulo), verifique e escreva
se os 3 (três) números formam um triângulo (a soma dos ângulos internos é igual a 180o). Se formam,
verifique se formam um triângulo acutângulo (3 ângulos < 90o), retângulo (1 ângulo = 90o) ou
obtusângulo (1 ângulo > 90o). Não existe ângulo com tamanho 0o (zero grau)./***/

import { question } from "readline-sync"

function main (){
    //entrada
    const angulo1 = get_number('Informe angulo 1 do triangulo: ')
    const angulo2 = get_number('Informe angulo 2 do triangulo: ')
    const angulo3 = get_number('Informe angulo 3 do triangulo: ')
    //processamento
    let eh_triangulo
    let tipo_triangulo 
    
    if ((angulo1 + angulo2 + angulo3) === 180){
         eh_triangulo = ('E triangulo!')
    }else{
        eh_triangulo = ('Nao e triangulo')
    }
    
    
    if(angulo1 < 90 && angulo2 < 90 && angulo3 < 90 ){
          tipo_triangulo = ('Triangulo acutângulo')    
    }else if (angulo1 === 90 || angulo2 === 90 || angulo3 === 90){
         tipo_triangulo = ('Triangulo retangulo')
    }else {tipo_triangulo = ('Triangulo obtusangulo')
    }

    //saida
    print (eh_triangulo)
    print (tipo_triangulo)
}
function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}
function print(mensagem){
    console.log(mensagem)
}

main()