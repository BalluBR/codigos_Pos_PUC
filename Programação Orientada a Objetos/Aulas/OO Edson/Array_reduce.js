//A função Reduce REDUZ os valores do array a um valor de acordo com a Regra estabelecida.
//O Exemplo abaixo o array é reduzido ao valor da soma dos elementos pares do array

array = [1,2,3,4,5,6]


let resultado = array.reduce(
    (acumulador,valor) => acumulador+=(valor%2==0)?valor:0,0
)

console.log(`A soma dos números pares do array [${array}] é = ${resultado}`)