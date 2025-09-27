//Bibliotecas
const prompt = require('prompt-sync')();
const fs = require('fs');
const path = require('path');

//Funcões
function Pistas() {
    console.clear()
    centertext("==============================================================")
    centertext("AÇÃO - PISTAS")
    centertext("==============================================================")

    if (pistaxerife) {
        if (!xerife) {
        centertext("[01] - VOCÊ DEVERIA VISITAR O XERIFE!")
        } else {
        centertext("[DESCARTADO] - VOCÊ DEVERIA VISITAR O XERIFE!")
        }
    }

pausarParaContinuar()
}

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

function pausarParaFechar() {
    centertext("==============================================================");
    centertext("[PRESSIONE ENTER PARA FECHAR]");
    centertext("==============================================================");
    prompt();
    process.exit()
    console.clear();
}

function opcaoinvalidanoclose() {
    console.clear()
    centertext("==============================================================")
    centertext("[OPÇÃO INVALIDA]")
    centertext("==============================================================");
    centertext("[PRESSIONE ENTER PARA VOLTAR]");
    centertext("==============================================================");
    prompt();
    console.clear();

}

function Opcãoinvalida() {
    console.clear()
    console.log("===========================================================================");
    console.log("[OPÇÃO INVALIDA - PUNIÇÃO: FECHAR O JOGO]")
    console.log("===========================================================================");
    console.log("[PRESSIONE ENTER PARA FECHAR]");
    console.log("===========================================================================");
    prompt("")
    process.exit(90)
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
let jogoativo = true;
let pistaxerife = false
let bebado = 0


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


    //CENARIO 1.1 - jogoativo
    while (jogoativo) {
    centertext("==============================================================")
    centertext("CENARIO 1.1 - AMERICAN VENOM SALOON")
    centertext("==============================================================")
    centertext(nomeJogador + " entra no Saloon, o ambiente cheira á uísque barato,")
    centertext("suor e madeira velha. O pianista para de tocar ao vê-lo entrar,")
    centertext("e todos os olhares se voltam para você.")
    centertext("==============================================================")
    centertext("INTERAÇÕES")
    centertext("==============================================================")
    centertext("[01] DONO DO BAR")
    centertext("[02] VELHO BÊBADO")
    centertext("[03] PIANISTA")
    centertext("[04] DAMA ELEGANTE")
    centertext("[05] SAIR DO SALOON")
    centertext("[06] CONSULTAR PISTAS")
    centertext("==============================================================")
    centertext("COMANDO? (1-5)")
    centertext("==============================================================")
    let bar = Number(prompt(">> "));

    if (bar == 1) {
        console.clear()
        if (dono) {
            centertext("==============================================================")
            centertext("DIÁLOGO - DONO DO BAR")
            centertext("==============================================================")
            centertext("DONO:")
            centertext("==============================================================")
            centertext("Já te disse tudo o que sei. Agora, se me der licença,")
            centertext("tenho um bar para tocar.")
            pausarParaContinuar()
        } else {
        centertext("==============================================================")
        centertext("DIÁLOGO - DONO DO BAR")
        centertext("==============================================================")
        centertext("DONO:")
        centertext("==============================================================")
        centertext("Aquele desgraçado do Silas passou por aqui. Bebeu até cair,")
        centertext("bateu em dois homens, quebrou a janela e ainda saiu rindo")
        centertext("da minha cara. Disse que essa cidade era pequena demais pra ele.") 
        centertext("\x1b[93mSe fosse você, procurava o xerife.\x1b[38;2;255;140;0m")
        pistaxerife=true
        pausarParaContinuar()
        }
dono=true
    } else if (bar == 2) {
        console.clear()
        if (velho && bebado == 2) {
            console.clear()
            centertext("==============================================================")
            centertext("EU NÃO TEM MAIS NADA PARA FALAR, QUE SACO, QUER SABER")
            centertext("UMA INFORMAÇÃO. AQUI ELA!")
            pausarParaContinuar()
            gameover()
            centertext("")
            centertext("==============================================================")
            centertext("[O VELHO SE APROXIMA... E ACERTA COM UMA FACA A REGIÃO DA SUA BARRIGA]")
            centertext("[VOCÊ SANGRA ATÉ A MORTE... MAS NÃO DESISTA, TENHA DETERMINAÇÃO]")
            pausarParaFechar()
        }
        if (velho) {
            centertext("==============================================================")
            centertext("DIÁLOGO - VELHO BÊBADO")
            centertext("==============================================================")
            centertext("VELHO:")
            centertext("==============================================================")
            centertext("Já te disse tudo o que sei. Agora, se me der licença,")
            centertext("tenho uma bebida para consumir.")
            bebado++
            pausarParaContinuar()
        } else {
        centertext("==============================================================")
        centertext("DIÁLOGO - VELHO BÊBADO")
        centertext("==============================================================")
        centertext("VELHO:")
        centertext("==============================================================")
        centertext("Silas… hah! Me pagou uma garrafa inteira ontem! Disse que ia procurar")
        centertext("o xerife, mas antes precisava ‘ressuscitar um amigo’. Homem bom…")
        centertext("ou pelo menos parecia, quando tinha bebida pra oferecer.")
        pausarParaContinuar()
        }
velho=true
    } else if (bar == 3) {
        console.clear()
        if (pianista) {
            centertext("==============================================================")
            centertext("DIÁLOGO - PIANISTA")
            centertext("==============================================================")
            centertext("PIANISTA:")
            centertext("==============================================================")
            centertext("Já te disse tudo o que sei. Agora, se me der licença,")
            centertext("tenho uma música para tocar.")
            pausarParaContinuar()
        } else {
        centertext("==============================================================")
        centertext("DIÁLOGO - PIANISTA")
        centertext("==============================================================")
        centertext("PIANISTA:")
        centertext("==============================================================")
        centertext("Silas Twone? Ah, sim, ele esteve aqui. Pediu uma música triste,")
        centertext("disse que estava com o coração partido. Tocou ‘The Streets of Laredo’")
        centertext("e ficou ali, bebendo e olhando para o nada. Depois saiu sem pagar.")
        pausarParaContinuar()
        }
pianista=true
    } else if (bar == 4) {
        console.clear()
        if (dama) {
            centertext("==============================================================")
            centertext("DIÁLOGO - DAMA ELEGANTE")
            centertext("==============================================================")
            centertext("DAMA:")
            centertext("==============================================================")
            centertext("Já te disse tudo o que sei. Agora, se me der licença...")
            centertext("==============================================================")
            pausarParaContinuar()
        } else {
            centertext("==============================================================")
            centertext("DIÁLOGO - DAMA ELEGANTE")
            centertext("==============================================================")
            centertext("DAMA:")
            centertext("==============================================================")
            centertext("Silas? Arrogante feito um rei. Tentou me comprar,")
            centertext("me chamou de prêmio barato. Disse que voltaria com dinheiro")
            centertext("suficiente pra comprar Red Rock inteira. Se for verdade,") 
            centertext("logo você vai sentir o cheiro da pólvora.")
            pausarParaContinuar()
        }
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
            pausarParaContinuar()
        } else {
            centertext("Você sente que já conversou com todos do Saloon.")
            jogoativo = false
        }
        
    } else if (bar == 6) {
        Pistas()

    } else {
        opcaoinvalidanoclose()
    }
    }

    //CENARIO 1.2 - jogoativo2
    centertext("==============================================================")
    centertext("CENARIO 1.2 - RUAS DA RED ROCK")
    centertext("==============================================================")


//Criação de conquistas

