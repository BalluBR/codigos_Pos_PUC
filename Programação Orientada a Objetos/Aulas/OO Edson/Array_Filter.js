//Função Filter - Retorna um novo array com todos os elementos que seguem a regra estabelicida
array = [4,6,3,8,10,11,2]

regraImpar = (item) => item%2 != 0

console.log("O(s) número(s) ímpar(es) do Array [" +array + "] é/são: [" + array.filter(regraImpar)+"]")

//Função Numero é primo? Primo =  numero só pode ser divisivel por 1 e por ele mesmo

    regraPrimo = (item)=>{
        let ndiv = 0
        for(let divisor = 1;divisor<=item; divisor++)
            if((item%divisor)==0)
            ndiv++
        if (ndiv ==2) return true
        else return false
    }

    console.log("O(s) número(s) primo(s) do Array [" +array + "] é/são: [" +array.filter(regraPrimo)+"]")

