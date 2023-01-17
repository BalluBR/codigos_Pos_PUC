export class umaClasse{
    #_umAtritubulo
    outroAtributo = "Atributo dois"
    constructor(n){
        this.#_umAtritubulo=n
    }
    capturarPrimeiroAtibuto(){
        return this.#_umAtritubulo
    }
}