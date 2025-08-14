

export function campoVazioCep(cep:String , mensagem:HTMLParagraphElement):boolean{
     if(cep === ""){
        mensagem.textContent = "Preencha o campo CEP!" ; 
        mensagem.classList.remove("hidden");
        setTimeout(() => {
            mensagem.classList.add("hidden");
            mensagem.textContent = "";
        }, 4000);
        return false ; 
}
return true ; 
}
   


export function quantidadeDeDigitosCep(cep:String , mensagem:HTMLParagraphElement){
    if( cep.length >= 1 && cep.length < 8){
        mensagem.textContent = "O cep deve conter 8 digitos!" ; 
        mensagem.classList.remove("hidden");
        setTimeout(() => {
            mensagem.classList.add("hidden");
            mensagem.textContent = "";
        }, 4000);
        return false ; ;
}
return true ; 
}