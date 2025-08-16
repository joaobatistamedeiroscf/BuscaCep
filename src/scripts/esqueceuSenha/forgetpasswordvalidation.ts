export function campoVazioEmailforget(email:String , mensagem:HTMLParagraphElement):boolean{
    console.log("Está pegando campovazioEmail") ;
    if(email === ""){
        mensagem.textContent = "Preencha o campo Email!" ; 
        mensagem.classList.remove("hidden");
        setTimeout(() => {
            mensagem.classList.add("hidden");
            mensagem.textContent = "";
        }, 4000);
        return false ; 
}
return true ; 
}
   
export function campoVazioSenhaforget(senha:String , mensagem:HTMLParagraphElement):boolean{
     console.log("Está pegando campovazioSenha") ;
    if(senha === ""){
        mensagem.textContent = "Preencha o campo Senha!" ; 
        mensagem.classList.remove("hidden");
        setTimeout(() => {
            mensagem.classList.add("hidden");
            mensagem.textContent = "";
        }, 4000);
        return false ; 
}
return true ; 
}

 export function validaEmailforget(email:string , mensagem:HTMLParagraphElement){
    console.log("Está pegando  campo validaEmailforget");
       const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(email)) {
               mensagem.textContent = "Digite um email válido!";
        mensagem.classList.remove("hidden");
          setTimeout(() => {
             mensagem.classList.add("hidden");
             mensagem.textContent = "";
                     }, 4000);
         return false ; 
             }
    
      
  return true;
 }

export function validaSenhaforget(senha:string ,  mensagem:HTMLParagraphElement){
           if (senha.length < 6) {
              mensagem.textContent = "A senha deve ter pelo menos 6 caracteres!";
              mensagem.classList.remove("hidden");
               setTimeout(() => {
              mensagem.classList.add("hidden");
              mensagem.textContent = "";
         }, 4000);
        return false ; 
  }
    
   
    return true;
  }

   
