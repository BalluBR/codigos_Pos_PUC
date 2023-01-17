array1 = [1,2,3,4,5]

var array2 = array1.map((item)=>item*2)
console.log(`O antigo array era: [${array1}] \nO novo array é: [${array2}]`)

console.log("\n--------------------------------------------------------\n")

array3 = array1.map((item)=> {return {x:item, y:item*2}})
console.log(`O antigo array era: [${array1}] \nO novo array é: [${array3}]`)