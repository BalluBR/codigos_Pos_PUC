//Função Every - Sinaliza se TODOS dos elementos do Array seguem a regra estabelecida
array = [2,3,5,7,8]


//Função Numero é primo? Primo =  numero só pode ser divisivel por 1 e por ele mesmo

    regraPrimo = (item)=>{
        let ndiv = 0
        for(let divisor = 1;divisor<=item; divisor++)
            if((item%divisor)==0)
            ndiv++
        if (ndiv ==2) return true
        else return false
    }

    console.log("Todos os numeros do array são primos? " +array.every(regraPrimo))

