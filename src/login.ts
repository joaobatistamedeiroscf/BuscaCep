import { initTogglePassword } from "./togglePassword";
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form") as HTMLFormElement;


  form.addEventListener("submit", (e) => {
  initTogglePassword();
  e.preventDefault();

    const email = (document.getElementById("login-email") as HTMLInputElement).value.trim();
    const password = (document.getElementById("login-senha") as HTMLInputElement).value;

    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      alert("Nenhum usuário cadastrado!");
      return;
    }

    const user = JSON.parse(storedUser);

    if (email === user.email && password === user.password) {
      alert(`Bem-vindo, ${user.name}!`);
      window.location.href = "/src/buscaCep.html"; 
    } else {
      alert("Email ou senha inválidos!");
    }
  });
});
