//Função forEach - Para cada elemento do Array ele fará a verificação determinada
array = [4,6,3,8,10,11,2]

array.forEach(
    (nro)=> console.log(
        "O número "+nro + " é " + (nro%2==0? "par":"ímpar")
    )
)
console.log("\n--------------------------------------------------------\n")
nroDivisores = (item)=>{
    let ndiv=0
    for (let divisor=1;divisor<=item;divisor++)
        if(item%divisor==0)
            ndiv++
        return ndiv
}

array.forEach(
    (nro) => console.log(
        "O número "+nro + " possui " + nroDivisores(nro)+" divisores"
    )
)

