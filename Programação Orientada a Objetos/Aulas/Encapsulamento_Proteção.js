class Pessoa {
    constructor(nome,anoDeNascimento,profissao){
        this.nome = nome;
        this.anoDeNascimento = anoDeNascimento;
        this.profissao = profissao;
    }
    ola(){
        console.log("Olá, eu sou o "+ this.nome)
    }
    calculaidade(){
        return new Date().getFullYear()-this.anoDeNascimento;
    }
}
class Estudante extends Pessoa {
    #matricula
    constructor(nome, anoDeNascimento, matricula){
        super(nome,anoDeNascimento,"Estudante")
        this.#matricula = matricula
    }
    getMatricula(){
        return this.#matricula
    }
    ola(){
        super.ola()
        console.log("Eu sou estudante")
    }
    // Dessa forma, a matricula é protegida e apenas é possível visualizá-la com a função getMatricula.
    // Não sendo possível alterá-la.

}

class Nota {
    constructor(disciplina, grau){
        this.disciplina = disciplina
        this.grau = grau
    }
}

const estudante1 = new Estudante("Felipe", 2000, 1751832)
estudante1.nota = new Nota("OO",10)
console.log(estudante1)

