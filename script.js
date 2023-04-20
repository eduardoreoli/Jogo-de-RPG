// obtem os elementos dos personagens
const arqueiro = document.getElementById("arqueiro");
const cavaleiro = document.getElementById("cavaleiro");
const mago = document.getElementById("mago");

// define a força do personagem
let resArqueiro = document.getElementById("res-arqueiro");
const numeroAleatorioArqueiro = Math.floor(Math.random() * 40) + 1;
resArqueiro.innerHTML = numeroAleatorioArqueiro;
let resCavaleiro = document.getElementById("res-cavaleiro");
const numeroAleatorioCavaleiro = Math.floor(Math.random() * 40) + 1;
resCavaleiro.innerHTML = numeroAleatorioCavaleiro;
let resMago = document.getElementById("res-mago");
const numeroAleatorioMago = Math.floor(Math.random() * 40) + 1;
resMago.innerHTML = numeroAleatorioMago;

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




const atacarBtn = document.getElementById("atacar-btn");
const monstro = document.getElementById("monstro");

let hpMonstro = 100;
let contadorAtaques = 0; // adiciona um contador de ataques



// define a defesa do monstro
const defesaMonstro = Math.floor(Math.random() * 40) + 1;
document.getElementById("defesa-monstro").innerHTML = defesaMonstro;
document.getElementById("hp-monstro").innerHTML = hpMonstro;


// evento de clique para o botão de atacar
atacarBtn.addEventListener("click", () => {
    // obtém a força do personagem selecionado
    let forcaPersonagem = 0;
    if (arqueiro.classList.contains("selected")) {
        forcaPersonagem = numeroAleatorioArqueiro;
    } else if (cavaleiro.classList.contains("selected")) {
        forcaPersonagem = numeroAleatorioCavaleiro;
    } else if (mago.classList.contains("selected")) {
        forcaPersonagem = numeroAleatorioMago;
    }

    // calcula o dano causado pelo personagem no monstro
    let dano = Math.max(forcaPersonagem - defesaMonstro, 0);

    // desconta o dano do hp do monstro
    hpMonstro = Math.max(hpMonstro - dano, 0);


    // atualiza a exibição do hp do monstro
    if (hpMonstro === 0) {
        monstro.src = "imagens/monstro-morto.jpg";
    }
       
    atualizarStatus();
});






function atualizarStatus() {
    // atualiza a força dos personagens
    const novoNumeroAleatorioArqueiro = Math.floor(Math.random() * 40) + 1;
    resArqueiro.innerHTML = novoNumeroAleatorioArqueiro;

    const novoNumeroAleatorioCavaleiro = Math.floor(Math.random() * 40) + 1;
    resCavaleiro.innerHTML = novoNumeroAleatorioCavaleiro;

    const novoNumeroAleatorioMago = Math.floor(Math.random() * 40) + 1;
    resMago.innerHTML = novoNumeroAleatorioMago;

    // atualiza a defesa do monstro
    const novaDefesaMonstro = Math.floor(Math.random() * 40) + 1;
    document.getElementById("defesa-monstro").innerHTML = novaDefesaMonstro;

    // atualiza o HP do monstro
    document.getElementById("hp-monstro").innerHTML = hpMonstro;
    
}

