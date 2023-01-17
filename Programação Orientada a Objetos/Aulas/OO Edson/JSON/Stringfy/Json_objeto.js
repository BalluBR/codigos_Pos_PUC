let student = {
    name: "João",
    age:30,
    isAdmin: false, course:["html", "css", "js"],
    wife: null
}

let json = JSON.stringify(student); // Gerando um texto a partir de um objeto (nesse caso chamado student)
console.log(json)