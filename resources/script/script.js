let variavel = document.querySelector("h1");

let paragrafos = document.querySelectorAll("p");

paragrafos.forEach(paragrafo=> {
    paragrafo.textContent = "texto alterado via javascript";
});
