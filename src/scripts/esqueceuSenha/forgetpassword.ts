import { initTogglePassword } from "../shared/togglePassword";
import { campoVazioEmailforget } from "./forgetpasswordvalidation";
import { campoVazioSenhaforget } from "./forgetpasswordvalidation";
import { validaEmailforget } from "./forgetpasswordvalidation";
import { validaSenhaforget } from "./forgetpasswordvalidation";

document.addEventListener("DOMContentLoaded" , () => {

    initTogglePassword() ; 

    const form = document.getElementById("form") as HTMLFormElement ; 
    const input_email = document.getElementById("email") as HTMLInputElement;
    const input_senha = document.getElementById("redefinir-senha") as HTMLInputElement ; 
    
    const msgEmail = document.getElementById("erro-email") as HTMLParagraphElement;
    const msgSenha = document.getElementById("erro-senha") as HTMLParagraphElement;



form.addEventListener("submit" ,(evento) => {
    evento.preventDefault() ;
    
    console.log("Botão está sendo clicado") ;

    const email = input_email.value ;
    const novasenha = input_senha.value ; 

    if(!campoVazioEmailforget(email,msgEmail)) return ;
    if(!validaEmailforget(email, msgEmail)) return ; 
    if(!campoVazioSenhaforget(novasenha, msgSenha)) return ;
    if(!validaSenhaforget(novasenha , msgSenha)) return ;  
   
   

    const userData = localStorage.getItem("user"); 

    if(!userData){
        alert("Nenhum usuário cadastrado !") ;
        return  ;  
    }

    const user = JSON.parse(userData) ; 

    if(user.email !== email){
        msgEmail.textContent = "Email não encontrado" ; 
        msgEmail.classList.remove("hidden") ; 
          setTimeout(() => {
            msgEmail.classList.add("hidden");
            msgEmail.textContent = "";
        }, 6000);    
        return ; 
    }

    user.password = novasenha ; 
    
    localStorage.setItem("user" , JSON.stringify(user)) ; 

    alert("✅ Senha redefinida com sucesso!") ; 
    window.location.href = "/index.html" ; 
});




}) ; 
 