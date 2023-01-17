import { CarroComPlaca } from "./carroComPlaca.mjs"
import { Locadora } from "./Locadora.mjs"

var locadora = new Locadora()

locadora.adicionaCarro(new CarroComPlaca("ABC-1234"))
locadora.adicionaCarro(new CarroComPlaca("DEF-5678"))
locadora.consultaCarros()

locadora.abasteceCarros(0,30)
locadora.consultaCarros()

locadora.abasteceCarros(1,30)
locadora.abasteceCarros(0,30)
locadora.consultaCarros()
