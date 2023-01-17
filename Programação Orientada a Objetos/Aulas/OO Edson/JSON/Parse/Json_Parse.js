 // É possível trasnformar um texto em um objeto através da propriedade parse do JSON

 let user = '{"name":"joão","age":"20","isAdmin":"false","friends":["Maria",1,2,3]}' //usar aspas simples por fora

 //propriedade ainda não existe, logo teremos erro
 //console.log(user.friends[0] ?? "Propriedade inexistente");
 
 user = JSON.parse(user);
 console.log(user.friends[0])