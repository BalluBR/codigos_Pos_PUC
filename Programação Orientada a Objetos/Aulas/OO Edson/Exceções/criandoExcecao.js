class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}
function vaiDarError(){
    throw new ValidationError("Dados inválidos! Por favor, corrigir o campo preenchido!")
}
try{
    vaiDarError()
}
catch(e){
    console.error(`${e.name}: ${e.message}`)
}