const myFirstPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Rejeitado!")
    },2000)
})

let ifFail = (error)=>{
    console.log("Uma exceção foi lançada! " +error)
}

myFirstPromise.then(
    (msg)=>console("All rigth!"),
    (msg) => {throw "não foi atendido!!!"}
)
.catch(ifFail)

console.log("Fim do programa")