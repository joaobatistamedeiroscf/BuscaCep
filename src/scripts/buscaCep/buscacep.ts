import { campoVazioCep } from "./buscacepvalidation";
import { quantidadeDeDigitosCep } from "./buscacepvalidation";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-busca-cep") as HTMLFormElement; 
  const input_cep = document.getElementById("cep") as HTMLInputElement; 
  const erro_cep = document.getElementById("erro-cep") as HTMLParagraphElement; 
  const descricao_p = document.querySelector(".text-area p") as HTMLParagraphElement; 
  const text_area = document.querySelector(".descricao") as HTMLTextAreaElement; 

  
  const reflow = (el: HTMLElement) => { void el.offsetWidth; };

  form.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    console.log("Botão sendo clicado");

    
    const cep = input_cep.value.replace(/\D/g, "");
    const mensagem = erro_cep;

    
    descricao_p.classList.add("hidden");
    text_area.classList.add("hidden");
    descricao_p.classList.remove("fade-in");
    text_area.classList.remove("fade-in");
    text_area.value = "";

    
    if (!campoVazioCep(cep, mensagem)) return;
    if (!quantidadeDeDigitosCep(cep, mensagem)) return;

    
    descricao_p.textContent = "Descrição:";
    text_area.value = "🔄 Carregando informações...";
    descricao_p.classList.remove("hidden");
    text_area.classList.remove("hidden");
    reflow(descricao_p); 
    reflow(text_area);
    descricao_p.classList.add("fade-in");
    text_area.classList.add("fade-in");

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) throw new Error("Erro ao buscar CEP");

      const data = await response.json();

      if (data.erro) {
        mensagem.textContent = "CEP não encontrado!";
        mensagem.classList.remove("hidden");
        setTimeout(() => {
          mensagem.classList.add("hidden");
          mensagem.textContent = "";
        }, 4000);

        
        descricao_p.classList.add("hidden");
        text_area.classList.add("hidden");
        return;
      }

      
      const safe = (v?: string) => v && v.trim() ? v : "—";
      text_area.value =
        `CEP: ${safe(data.cep)}\n` +
        `Logradouro: ${safe(data.logradouro)}\n` +
        `Bairro: ${safe(data.bairro)}\n` +
        `Cidade: ${safe(data.localidade)}\n` +
        `Estado: ${safe(data.uf)}`;

    
      text_area.classList.remove("fade-in");
      reflow(text_area);
      text_area.classList.add("fade-in");

    } catch (error) {
      console.error(error);
      mensagem.textContent = "Erro ao buscar CEP!";
      mensagem.classList.remove("hidden");
      setTimeout(() => {
        mensagem.classList.add("hidden");
        mensagem.textContent = "";
      }, 4000);

      descricao_p.classList.add("hidden");
      text_area.classList.add("hidden");
    }
  });
});
