
document.addEventListener("DOMContentLoaded", () => {

const form = document.getElementById("form-busca-cep") as HTMLFormElement; 

form.addEventListener("submit" , (evento) => {
    evento.preventDefault();

    console.log("Botão sendo clicado") ; 

});

}) ;