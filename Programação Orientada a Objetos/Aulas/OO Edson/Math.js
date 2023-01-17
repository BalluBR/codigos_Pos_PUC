var a = []
a[0]= Math.random();
a[1]= Math.random();
a[9]= Math.random();

console.log("FOR ---- IN")
console.log("---------------------")

for(let val in a)
    console.log("-->"+val)
    console.log("--------------------- \n")
  
for(let val of a)
    console.log("-->"+val)
    console.log("--------------------- \n")    

for(let i=0; i<a.length;i++){
    console.log("-->"+i +":" +a[i])    
}

console.log("--------FIM--------")