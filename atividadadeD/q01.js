import { question } from "readline-sync";
function main() {
    const numero1 = Number(question('Informe numero1: '))
    const numero2 = Number(question('Informe numero2: '))
    const numero3 = Number(question('Informe numero3: '))
    
    if (numero1 === numero2 && numero1 === numero3) {
       console.log('Os três numeros são iguais')
    } else if (numero1 === numero2 || numero1 === numero3 || numero2 === numero3) {
        console.log('Dois numero são iguais')
    }else{
        console.log('Nenhum numero e igual!')
    }

}
main()
