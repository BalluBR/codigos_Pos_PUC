import { umaClasse } from "./classe.mjs";
 
var umObjetoDeClasse = new umaClasse("um valor")
var json = JSON.stringify(umObjetoDeClasse);
console.log(json)