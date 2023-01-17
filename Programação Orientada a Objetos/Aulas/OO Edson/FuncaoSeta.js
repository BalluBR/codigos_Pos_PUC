/*Arrow Funciton possuem a seguinte SINTAXE:
{parametro1, parametro2,..,parametroN} => {statements}
{parametro1, parametro2,..,parametroN} => expression

singleParameter => {statements}
--------------EXEMPLOS------------------*/
//EXEMPLO 1
 var somar = ()=> console.log("função sem parâmetro")
 somar()
 somar(1)

//EXEMPLO 2
 somar2 = _=> console.log("Usando underscore")
 somar2()

 //EXEMPLO 3
 somar3 = (x,y)=> x+y;
 console.log(somar3(1,2))

 //EXEMPLO 4
 somar4 = (x,y)=> {return x+y}
 console.log(somar4(3,4))

 //EXEMPLO 5
 somar5 = (x,y) => x>y?x:y   // Se x maior que y então (?) retorna x senão (:) retorna y. Mesma coisa do EX 6
 console.log(somar5(5,6))

 //EXEMPLO 6
 somar6 = (x,y) =>{
    if (x>y){
        return x
    } else{
        return y
    }
 }
 console.log(somar6(7,8))
