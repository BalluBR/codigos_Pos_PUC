//Função Some - Sinaliza se algum dos elementos do Array segue a regra estabelecida
array = [4,6,3,8,10]

regraImpar = (item) => item%2 != 0

console.log("Há um número ímpar? " + array.some(regraImpar))

//Função Numero é primo? Primo =  numero só pode ser divisivel por 1 e por ele mesmo

    regraPrimo = (item)=>{
        let ndiv = 0
        for(let divisor = 1;divisor<=item; divisor++)
            if((item%divisor)==0)
            ndiv++
        if (ndiv ==2) return true
        else return false
    }

    console.log("Existem numeros primos no array? " +array.some(regraPrimo))

