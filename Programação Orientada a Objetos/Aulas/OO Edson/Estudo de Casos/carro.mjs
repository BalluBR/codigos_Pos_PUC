export class Carro{
    #_tanque;
    #_capacidadeDoTanque;
    
    constructor(valor){
        this.#_tanque=0;
        this.#_capacidadeDoTanque = valor;
    }

    get tanque(){ // retorna o valor do tanque. APENAS consulta
        return this.#_tanque;
    }
    get capacidade(){// retorna o valor da capacidade do tanque. APENAS consulta
        return this.#_capacidadeDoTanque;
    }
    set tanque(qtde){// Setter vai alterar o valor do tanque. Abastecer.
        if(qtde>=0){
            if(qtde+this.#_tanque>this.#_capacidadeDoTanque){
                this.#_tanque=this.#_capacidadeDoTanque;
                //console.log("O tanque está cheio!")
            }else{
                this.#_tanque+=qtde;
            }
        }
    }
}