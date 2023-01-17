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
const pessoa1 = new Pessoa("Bruno",1997,"estudante")

console.log(pessoa1.calculaidade())
