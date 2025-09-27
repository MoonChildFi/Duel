//Bibliotecas
const prompt = require('prompt-sync')();
const fs = require('fs');
const path = require('path');

//Funcões
function logoincial() {
    const logoLines = [
        "",
        "██████████    ████      ██  ████████████  ████              ███",
        "████      ██  ████      ██  ████          ████              ████",
        "████      ██  ████      ██  ████          ████              ████",
        "████      ██  ████      ██  ████          ████              ████",
        "████      ██  ████      ██  █████████     ████              ████",
        "████      ██  ████      ██  ████          ████              ████",
        "████      ██  ████      ██  ████          ████            ████████",
        "████      ██  ████      ██  ████          ████              ████",
        "██████████    ████████████  ████████████  ████████████      ████"
    ];

    const maxLineWidth = Math.max(...logoLines.map(line => line.length));
    const terminalWidth = process.stdout.columns;
    const padding = Math.max(0, Math.floor((terminalWidth - maxLineWidth) / 2));
    const paddedLogo = logoLines.map(line => ' '.repeat(padding) + line);
    paddedLogo.forEach(line => console.log(line));
    centertext(" ");
}

function pausarParaContinuar() {
    centertext("==============================================================");
    centertext("[PRESSIONE ENTER PARA CONTINUAR]");
    centertext("==============================================================");
    prompt();
    console.clear();
}

function pausarParaContinuarA() {
    centertext("==============================================================");
    centertext("[PRESSIONE ENTER PARA CONTINUAR]");
    centertext("==============================================================");
    prompt();
}

function centertext(text) {
    const terminalWidth = process.stdout.columns;
    const padding = Math.max(0, Math.floor((terminalWidth - text.length) / 2));
    console.log(' '.repeat(padding) + text);
}

function gameover() {

    const logo = [
    " ███████████████    ████████████    █████████████████████     █████████████",
    "██████             ██████  ██████   ██████  ██████  ██████   ██████",
    "██████             ██████  ██████   ██████  ██████  ██████   ██████",
    "██████  ████████   ██████████████   ██████  ██████  ██████   ██████████",
    "██████    ██████   ██████  ██████   ██████  ██████  ██████   ██████",
    "██████    ██████   ██████  ██████   ██████  ██████  ██████   ██████",
    " ███████████████   ██████  ██████   ██████  ██████  ██████    █████████████",
    "",
    "   ██████████████    ██████  ██████    █████████████   ██████████████",
    "  ████████████████   ██████  ██████   ██████           ██████   ██████",
    "  ██████    ██████   ██████  ██████   ██████           ██████   ██████",
    "  ██████    ██████   ██████  ██████   ██████████       █████████████",
    "  ██████    ██████   ██████  ██████   ██████           ███████████████",
    "  ████████████████   ██████  ██████   ██████           ██████   ██████",
    "   ██████████████    █████████████     █████████████   ██████   ██████",
    ]
const maxLineWidth = Math.max(...logo.map(line => line.length));
    const terminalWidth = process.stdout.columns;
    const padding = Math.max(0, Math.floor((terminalWidth - maxLineWidth) / 2));
    const paddedLogo = logo.map(line => ' '.repeat(padding) + line);
    paddedLogo.forEach(line => console.log(line));
}
//Variaveis
let nomeJogador = "";
jogadorpadrao=true
let dama=false
let dono=false
let velho=false
let pianista=false

//Jogo em si
console.clear();


//INICIO
logoincial()
    centertext("==============================================================")
    centertext("-- Versão 0.2 --")
    centertext("==============================================================")
    centertext("REGRAS BASICAS")
    centertext("==============================================================")
    centertext("-- Cada jogador começa com 100 pontos de vida --")
    centertext("-- Utilize apenas numeros indicados nas opções --")
    centertext("-- Evite mudar o tamanho do terminal. --")
    centertext("-- Divirta-se! --")
    pausarParaContinuar();

    //INFO BASICA
    logoincial()
    centertext("==============================================================")
    centertext("INFORMAÇÕES BASICAS")
    centertext("==============================================================")
    centertext("NOME DO JOGADOR:")
    centertext("*Caso o espaço seja deixado em branco, o nome padrão será 'Kenan Thomas'*")
    nomeJogador = prompt(">> ");
    if (nomeJogador.trim() === "") {
        nomeJogador = "Kenan Thomas";
    } else {
        jogadorpadrao=false
    }
    pausarParaContinuar();


//CONTEXTO
    logoincial()
    centertext("==============================================================")
    centertext("CONTEXTUALIZAÇÃO")
    centertext("==============================================================")

    if (jogadorpadrao==true){
        nomeJogador="Kenan Thomas"
    }
    centertext(nomeJogador + " é um pistoleiro da antiga gangue Endline")
    centertext("á pouco tempo viu seu lider Silas Twone trair e matar seu melhor amigo Leonard.")
    centertext("==============================================================")
    centertext(nomeJogador + ", deixou a poeira abaixar, descobrindo que o traidor")
    centertext("havia sido visto em uma cidade isolada chamada 'Red Rock'.")
    centertext("==============================================================")
    centertext("Agora, sedento por vingança, você parte em uma jornada")
    centertext("para encontrar Silas Twone e fazer justiça com as próprias mãos.")
    pausarParaContinuar();

    //cenario 1
    centertext("==============================================================")
    centertext("CENÁRIO 1 - A CHEGADA EM RED ROCK")
    centertext("==============================================================")
    centertext("Noite fria. O vento traz a poeira vermelha das colinas.") 
    centertext("A lua ilumina a placa enferrujada:\x1b[91m Red Rock \x1b[38;2;255;140;0m")
    centertext("==============================================================")
    centertext(nomeJogador + " com a cicatriz da traição ainda marcada no corpo, ele cavalga")
    centertext("em direção ao primeiro estabelecimento. O American Venom Saloon")
    pausarParaContinuar();

    centertext("==============================================================")
    centertext("CENARIO 1.1 - AMERICAN VENOM SALOON")
    centertext("==============================================================")
    centertext(nomeJogador + " Entra no Saloon, o ambiente cheira á uísque barato, suor e madeira velha.")
    centertext("O pianista para de tocar ao vê-lo entrar, e todos os olhares se voltam para você.")
    centertext("==============================================================")
    centertext("INTERAÇÕES")
    centertext("==============================================================")
    centertext("[01] DONO DO BAR")
    centertext("[02] VELHO BÊBADO")
    centertext("[03] PIANISTA")
    centertext("[04] DAMA ELEGANTE")
    centertext("[05] SAIR DO SALOON E IR PARA A RUA")
    centertext("==============================================================")
    centertext("O que você deseja fazer?")
    let bar = Number(prompt(">> "));

    if (bar == 1) {
dono=true
    } else if (bar == 2) {
velho=true
    } else if (bar == 3) {
pianista=true
    } else if (bar == 4) {
dama=true
    } else if (bar == 5) {
        console.clear()
        centertext("==============================================================")
        centertext(nomeJogador + " sai do saloon, a noite fria o envolve novamente.")

        if (!dama || !dono || !velho || !pianista) {
            centertext("Você sente que deixou algo para trás...")
            centertext("Talvez você deveria voltar e conversar com...")
            centertext("==============================================================")
        
            if (!dono) { 
                centertext("[01] DONO DO BAR")
            }
            if (!velho) {
                centertext("[02] VELHO BÊBADO")
            }
            if (!pianista) {
                centertext("[03] PIANISTA")
            }
            if (!dama) {
                centertext("[04] DAMA ELEGANTE")
            }

        } else {
            centertext("Você sente que já conversou com todos do Saloon.")
        }
        
    }



//Criação de conquistas

