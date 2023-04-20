// obtem os elementos dos personagens
const arqueiro = document.getElementById("arqueiro");
const cavaleiro = document.getElementById("cavaleiro");
const mago = document.getElementById("mago");

//define os event listeners para cada elemento
arqueiro.addEventListener("click", ()=>{
    arqueiro.classList.add("selected");
    cavaleiro.classList.remove("selected");
    mago.classList.remove("selected");
});

cavaleiro.addEventListener("click", () => {
    arqueiro.classList.remove("selected");
    cavaleiro.classList.add("selected");
    mago.classList.remove("selected");
});

mago.addEventListener("click", () => {
    arqueiro.classList.remove("selected");
    cavaleiro.classList.remove("selected");
    mago.classList.add("selected");
});