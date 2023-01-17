import{area,cincunferencia as circ} from "./Definicao.mjs"
console.log(`FORMA 1 - A circunferencia do circulo de raio 4 é: ${circ(4)} e a área é ${area(4)}`)

//-----------------OU----------------------
import * as circulo from "./Definicao.mjs"
console.log(`FORMA 2 - A área do circulo de raio 4 é ${circulo.area(4)} e a circunferência é ${circulo.cincunferencia(4)}`)