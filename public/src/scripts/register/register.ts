import { campoVazio, validaNome, validaEmail, validaSenha, confirmaSenha } from "./registervalidation";
import { initTogglePassword } from "../shared/togglePassword";

document.addEventListener("DOMContentLoaded", () => {

  initTogglePassword(); 

  const form = document.getElementById("register-form") as HTMLFormElement;

  form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    console.log("Botão sendo clicado")!

    const name = (document.getElementById("register-name") as HTMLInputElement).value;
    const email = (document.getElementById("register-email") as HTMLInputElement).value;
    const birth = (document.getElementById("register-nascimento") as HTMLInputElement).value;
    const password = (document.getElementById("register-senha") as HTMLInputElement).value;
    const confirmPassword = (document.getElementById("register-conf-senha") as HTMLInputElement).value;

    const msgNome = document.getElementById("erro-name") as HTMLParagraphElement;
    const msgEmail = document.getElementById("erro-email") as HTMLParagraphElement;
    const msgNascimento = document.getElementById("erro-nascimento") as HTMLParagraphElement;
    const msgSenha = document.getElementById("erro-senha") as HTMLParagraphElement;
    const msgConfSenha = document.getElementById("erro-conf-senha") as HTMLParagraphElement;

    
    let valido = true;

    if (campoVazio(name, msgNome, "Preencha o nome!")) valido = false;
    else if (!validaNome(name, msgNome)) valido = false;

    if (campoVazio(email, msgEmail, "Preencha o email!")) valido = false;
    else if (!validaEmail(email, msgEmail)) valido = false;

    if (campoVazio(birth, msgNascimento, "Preencha a data de nascimento!")) valido = false;

    if (campoVazio(password, msgSenha, "Preencha a senha!")) valido = false;
    else if (!validaSenha(password, msgSenha)) valido = false;

    if (campoVazio(confirmPassword, msgConfSenha, "Confirme a senha!")) valido = false;
    else if (!confirmaSenha(password, confirmPassword, msgConfSenha)) valido = false;

    if (!valido) return;

  
    const user = { name, email, birth, password };
    localStorage.setItem("user", JSON.stringify(user));


    alert("✅ Cadastro realizado com sucesso!");
    window.location.href = "/index.html";
  });
});
