// Função Closure.
// Nessa função, o valor de "x" é memorizado quando é declarado o sama5 que recebe x=5
// Essa propriedade fica mais interessante quando é associado a memorização de um objeto
function somaValores(x){
    return function(y){
        return x+y;
    }

}
var soma5 = somaValores(5)
console.log(`O valor da soma é ${soma5(2)}`)