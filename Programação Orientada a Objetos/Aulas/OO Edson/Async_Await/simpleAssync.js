async function fazAlgo(){
    let promise = new Promise((resolve, reject) =>{
        setTimeout(()=> resolve("Pedido atendido"),2000)
    })
    let resultado = await promise
    return resultado
}
/*
//--------EXEMPLO1-------------------
console.log("Iniciando o Programa")
fazAlgo().then((msg)=>console.log(msg))
console.log("Finalizando o programa")


//--------EXEMPLO2-------------------
*/
async function main(){
    console.log("Iniciando o programa")
    console.log(await(fazAlgo())) // esse await faz com que o programe espere a resposta mesmo chamando uma função assíncrona
    console.log("Finalizando o programa")

}
main()