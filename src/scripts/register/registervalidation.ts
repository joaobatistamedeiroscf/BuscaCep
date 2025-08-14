export function campoVazio(valor: string, mensagemEl: HTMLParagraphElement, texto: string): boolean {
  if (valor.trim() === "") {
    mensagemEl.textContent = texto;
    mensagemEl.classList.remove("hidden")
    return true;
  }
  mensagemEl.textContent = "";
  mensagemEl.classList.add("hidden");
  return false;
}

export function validaNome(name: string, mensagemEl: HTMLParagraphElement): boolean {
  if (name.length < 3) {
    mensagemEl.textContent = "O nome deve ter pelo menos 3 caracteres!";
    mensagemEl.classList.remove ("hidden");
    return false;
  }
  mensagemEl.textContent = "";
  mensagemEl.classList.add("hidden");
  return true;
}

export function validaEmail(email: string, mensagemEl: HTMLParagraphElement): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    mensagemEl.textContent = "Digite um email válido!";
   mensagemEl.classList.remove("hidden");
    
    return false;
  }
  mensagemEl.textContent = "";
  mensagemEl.classList.add("hidden");
  return true;
}

export function validaSenha(senha: string, mensagemEl: HTMLParagraphElement): boolean {
  if (senha.length < 6) {
    mensagemEl.textContent = "A senha deve ter pelo menos 6 caracteres!";
   mensagemEl.classList.remove("hidden");
    
    return false;
  }
  mensagemEl.textContent = "";
mensagemEl.classList.add("hidden");
  return true;
}

export function confirmaSenha(senha: string, confirma: string, mensagemEl: HTMLParagraphElement): boolean {
  if (senha !== confirma) {
    mensagemEl.textContent = "As senhas não conferem!";
   mensagemEl.classList.remove("hidden");
    
    return false;
  }
  mensagemEl.textContent = "";
  mensagemEl.classList.add("hidden");
  return true;
}
