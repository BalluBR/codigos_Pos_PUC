import { CarroComPlaca } from "./carroComPlaca.mjs";

export class Locadora{
    #_carros

    constructor(){
        this.#_carros=[]
    }

    adicionaCarro(umCarro){
        this.#_carros.push(umCarro)
        console.log("Existem "+this.#_carros.length+" carros na locadora.")
    }

    consultaCarros(){
        this.#_carros.forEach(
            (carro)=>console.log("Placa do carro = "+carro.placa+" tq = " +carro.tanque)
        )
    }
    abasteceCarros(index,quantidade){
        if(index>=0 && index<this.#_carros.length){
            this.#_carros[index].tanque = quantidade
        }
    }
}