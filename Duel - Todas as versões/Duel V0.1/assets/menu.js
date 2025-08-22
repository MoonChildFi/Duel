const readline = require('readline'); // Importa o módulo readline para lidar com a entrada de linha de comando.
const { exec, execSync } = require('child_process'); // Importa exec e execSync de child_process para executar comandos externos.
const prompt = require('prompt-sync')(); // Importa prompt-sync para entrada síncrona do usuário.
const folderPath = '../Achievements';
const fs = require('fs');
const path = require('path');
// Cria uma interface readline para ler a entrada e escrever a saída no console.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lang = 0
let tocando = false
const accountFilePath = '../Account/AccountInfo.txt';
const save_conquistas = '../Account/Achievementsavefile.bin'
let Login
let overwrite = "S"
let skipaccount = false
let check = false
const conquistasExistem = fs.existsSync(save_conquistas);
const count = fs.readdirSync(folderPath).filter(f => f.endsWith('.bin')).length;
const finais = fs.readdirSync(folderPath).filter(f => f.endsWith('.bin'));
const contaExiste = fs.existsSync(accountFilePath);
let ET = false

function account() {
    let contagg = false
    
    if (!skipaccount) {
        console.clear();
        console.log ("███████████████████████████████████████████████████████████████████")
        console.log ("██                                                               ██")
        console.log ("██                                                               ██")
        console.log ("██                           ██████                              ██")
        console.log ("██                         ██████████                            ██")
        console.log ("██                        ████████████                           ██")
        console.log ("██                        ████████████                           ██")
        console.log ("██                         ██████████                            ██")
        console.log ("██                           ██████                              ██")
        console.log ("██                          ████████                             ██")
        console.log ("██                      ███████████████                          ██")
        console.log ("██                      ███████████████                          ██")
        console.log ("██                                                               ██")
        console.log ("███████████████████████████████████████████████████████████████████")
        console.log ("")
        console.log("---------------------------------------------------------------");
            console.log("-> Você gostaria de criar uma conta?");
            console.log("-> (Apenas para salvamento local!)");
            console.log("---------------------------------------------------------------");
            console.log ("[01] Criar Conta");
            console.log ("[02] Ignorar");
            console.log("---------------------------------------------------------------");
            Login = Number(prompt("> "));
            
            if (Login == 1) {
                console.clear();
            skipsavefilecheck = true
            check = true
                if (contaExiste) {
                    
                    console.log ("███████████████████████████████████████████████████████████████████")
        console.log ("██                                                               ██")
        console.log ("██                           ██████                              ██")
        console.log ("██                       █████   ██████                          ██")
        console.log ("██                      ████        ██████                       ██")
        console.log ("██                                 ██████                        ██")
        console.log ("██                               ██████                          ██")
        console.log ("██                             ██████                            ██")
        console.log ("██                           ██████                              ██")
        console.log ("██                                                               ██")
        console.log ("██                           ██████                              ██")
        console.log ("██                           ██████                              ██")
        console.log ("██                                                               ██")
        console.log ("███████████████████████████████████████████████████████████████████")
        console.log ("")
                    console.log("---------------------------------------------------------------");
                    console.log("-> Um arquivo já existe!");
                    console.log("-> Você gostaria de atualiza-lo? [S/N]");
                    console.log("---------------------------------------------------------------");
                    overwrite = prompt("> ").toUpperCase();
            
    
                    if (overwrite !== 'S') {
                        console.clear();
                        console.log ("███████████████████████████████████████████████████████████████████")
        console.log ("██                                                               ██")
        console.log ("██                           ██████                              ██")
        console.log ("██                           ██████                              ██")
        console.log ("██                           ██████                              ██")
        console.log ("██                           ██████                              ██")
        console.log ("██                           ██████                              ██")
        console.log ("██                           ██████                              ██")
        console.log ("██                           ██████                              ██")
        console.log ("██                                                               ██")
        console.log ("██                           ██████                              ██")
        console.log ("██                           ██████                              ██")
        console.log ("██                                                               ██")
        console.log ("███████████████████████████████████████████████████████████████████")
        console.log ("")
                        console.log("---------------------------------------------------------------");
                        console.log("-> Criação de conta cancelada. Arquivo existente não foi sobrescrito.");
    
            
                    }
                }
                if (overwrite == "S") {
                    console.clear()
                    console.log ("███████████████████████████████████████████████████████████████████")
        console.log ("██                                                               ██")
        console.log ("██                                                               ██")
        console.log ("██                           ██████                              ██")
        console.log ("██                         ██████████                            ██")
        console.log ("██                        ████████████                           ██")
        console.log ("██                        ████████████                           ██")
        console.log ("██                         ██████████                            ██")
        console.log ("██                           ██████                              ██")
        console.log ("██                          ████████                             ██")
        console.log ("██                      ███████████████                          ██")
        console.log ("██                      ███████████████                          ██")
        console.log ("██                                                               ██")
        console.log ("███████████████████████████████████████████████████████████████████")
        console.log ("")
                console.log("---------------------------------------------------------------");
                Usuario = prompt("Digite o nome de usuário: ");
                Senha = prompt("Digite a sua senha: ");
                console.log("---------------------------------------------------------------");
            
                const conteudo =
                                 "Nome: " + Usuario + "\r\n" +
                                 "Senha: " + Senha + "\r\n" + 
                                 "Idioma: Português (BR) \r\n";
            
                fs.writeFileSync(accountFilePath, conteudo, 'utf8');
        
                let finais1
        if (count == 0) {
            console.clear();
            console.log("---------------------------------------------------------------");
            console.log ("-> [SISTEMA] Conta criada com sucesso!");
            console.log("---------------------------------------------------------------");
            console.log("-> Você pode acessar suas informações no arquivo ")
            console.log("'Accountinfo.txt' na pasta 'Account'.");
            console.log("---------------------------------------------------------------");
            console.log("-> Você não tem finais, quando você tiver eles estarão alojados em: ")
            console.log("'Achievementsavefile.bin' na pasta 'Account'.");
        
        } else {
            finais1 = finais
            const conteudo5 = 
                
                                 (finais1) + "\r\n"; 
        
        fs.writeFileSync(save_conquistas, conteudo5, 'utf8');      
        contagg = true     
        }  
            }
            if (contagg){
            console.clear();
            console.log("---------------------------------------------------------------");
            console.log ("-> [SISTEMA] Conta criada com sucesso!");
            console.log("---------------------------------------------------------------");
            console.log("-> Você pode acessar suas informações no arquivo ")
            console.log("'Accountinfo.txt' na pasta 'Account'.");
            console.log("---------------------------------------------------------------");
            console.log("-> Seus finais estão salvos no arquivo ")
            console.log("'Achievementsavefile.bin' na pasta 'Account'.");
            }
    
            } else {
                console.clear();
                console.log("---------------------------------------------------------------");
                console.log("-> Criação de conta ignorada!");
            }
            }
    
        pausarParaContinuar()
    
        const local_conta = save_conquistas;
        const count1 = fs.existsSync(local_conta)
        
        while (check == false) {
        
        if (!count1 && !skipsavefilecheck) {
            console.log ("---------------------------------------------------------------");
        console.log ("-> Não foi detectado arquivos de save!")
        check = true
        pausarParaContinuar()
        }
        if (count1 && !skipsavefilecheck) {
        console.log ("---------------------------------------------------------------");
        console.log ("-> Foi detectado finais em seu arquivo de save!")
        console.log ("-> Se você já tiver os arquivos na pasta de conquistas, NÃO RESTAURE")
        console.log ("---------------------------------------------------------------");
        console.log ("-> Quer restaurar?")
        console.log ("---------------------------------------------------------------");
        console.log ("-> [01] Sim")
        console.log ("-> [02] Não")
        console.log ("-> [03] Verificar Pasta")
        console.log ("---------------------------------------------------------------");
        let restart = Number(prompt("> "))
        
        if (restart == 1){
        try {
        const dados = fs.readFileSync(save_conquistas, 'utf8')
        console.clear()
        console.log ("---------------------------------------------------------------");
        console.log ("-> Os seguintes finais serão restaurados!")
        console.log ("---------------------------------------------------------------");
        console.log(dados)
        } catch (err) {
        console.error('[ERRO]: Falha na leitura dos arquivos!')
        
        }
        pausarParaContinuar()
        
        dados = fs.readFileSync(save_conquistas, 'utf8')
        if (dados.includes('BAD_ENDING.bin')) {
            fs.writeFileSync('../Achievements/BAD_ENDING.bin', 'a', 'utf8');
        }
        if (dados.includes('REAL_ENDING.bin')) {
            fs.writeFileSync('../Achievements/REAL_ENDING.bin', 'a', 'utf8');
        }
        if (dados.includes('GOOD_ENDING.bin')) {
            fs.writeFileSync('../Achievements/GOOD_ENDING.bin', 'a', 'utf8');
        }
        if (dados.includes('BAD_ENDING2.bin')) {
            fs.writeFileSync('../Achievements/BAD_ENDING2.bin', 'a', 'utf8');
        }
        if (dados.includes('BAD_ENDING3.bin')) {
            fs.writeFileSync('../Achievements/BAD_ENDING3.bin', 'a', 'utf8');
        }
        if (dados.includes('SECRET_ENDING.bin')) {
            fs.writeFileSync('../Achievements/SECRET_ENDING.bin', 'a', 'utf8');
        }
        if (dados.includes('undefined')) {
            console.clear()
            console.log("---------------------------------------------------------------");
        console.log("-> Você ainda não tem finais...")
        pauseToContinue()
        }
        
        check = true
        skipaccount = true
        
        } else if (restart == 2){
            check = true
            console.clear()
            console.log ("---------------------------------------------------------------");
            console.log  ("-> Restauração Pulada!")
            pausarParaContinuar()
        } else if (restart == 3){
            console.clear()
            console.log ("---------------------------------------------------------------");
            console.log  ("-> Checando a pasta...")
            console.log ("---------------------------------------------------------------");
        
            if (finais != null) {
                console.log ("-> ARQUIVOS ENCONTRADOS:")
                console.log (finais)
                console.log ("---------------------------------------------------------------");
                console.log ("-> Se quiser manter esses finais, NÃO RESTAURE")
                pausarParaContinuar()
            } else {
                console.log ("---------------------------------------------------------------");
                console.log ("-> Não foi encontrado arquivos de finais!")
                pausarParaContinuar()
            }
        } else {
            Opcãoinvalida()
        }
        }
        
        }
}


function printDivider() {
    console.log("---------------------------------------------------------------");
}

function InvalidOption() {
    console.clear()
    console.log("")
    console.log("---------------------------------------------------------------");
    console.log("-> Opcão Invalida!")
    console.log ("-> Invalid option!")
    printDivider();
    console.log ("-> Pressione 1 para fechar")
    console.log("-> Press 1 to close...");
    printDivider();
    while (prompt("> ") !== '1') {
        // Loops ate player aperta 1
    }
    process.exit(90)
}

function pauseToContinue() {
    console.log("---------------------------------------------------------------");
    console.log("-> Press 1 to continue...");
    console.log("---------------------------------------------------------------");
    while (prompt("> ") !== '1') {
        // Loops ate player aperta 1
    }
}

// Define os itens do menu principal em português.
const menuItems = [
    'Iniciar Jogo',
    'Excluir Progresso',
    'Ver Conquistas',
    'Configurações',
    'Sair'
];

let selectedIndex = 0; // Mantém o controle do item de menu atualmente selecionado (índice).

function tocamusic() {
    const command = `start /min "" "./audios/VLC/vlc.exe" --play-and-exit --qt-start-minimized "./audios/You_Cant_Escape.mp3"`;
//lembrar q o ¨¨  é o titulo do cmd
    exec(`cmd.exe /c "${command}"`, (error, stdout, stderr) => {
        // azio para suumir quaisquer mensagens no console.
    });
}

function askForMusicPreference() {
if (tocando) {
    console.clear()
    console.log("---------------------------------------------------------------");
    console.log("-> A música já está tocando!");
    console.log("-> The music is already playing!");
    console.log("---------------------------------------------------------------");
    console.log("-> Quer parar ela?");
    console.log("-> Do you want to stop it?");
    console.log("---------------------------------------------------------------");
    console.log("[01] Sim");
    console.log("[02] Não");
    console.log("---------------------------------------------------------------");
let msuica = Number(prompt("> "));

if (msuica == 1) {
    console.clear()
    console.log("---------------------------------------------------------------");
    console.log("-> Musica Encerrada!");
    console.log("-> Closed Music!");
    exec('taskkill /IM vlc.exe /F', (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro ao tentar parar a música: ${error.message}`);
            return;
        }
        console.log('Música parada com sucesso.');
        tocamusic = false; // Atualiza o estado para indicar que a música não está mais tocando.
    });
    pauseToContinue()
    tocando = false
}
} else {

    if (lang == 0) {
         console.clear();
        console.log("")
    console.log("---------------------------------------------------------------");
        console.log("-> Jogar com a trilha sonora?");
        console.log("-> Play with soundtrack?");
        console.log("---------------------------------------------------------------");
        console.log("[01] Sim");
        console.log("[02] Não");
        console.log("---------------------------------------------------------------");
    
        let musicChoice = Number(prompt("> "));
        if (musicChoice === 1) {
            console.log("---------------------------------------------------------------");
            console.log ("-> O VLC está iniciando... (Isso pode demorar)")
            console.log ("-> The VLC is starting... (May take a while)")
            tocamusic()
            tocando = true
            pauseToContinue()
        } else if (musicChoice != 1 && musicChoice != 2){
            InvalidOption()
        }
    } else if (lang == 1){
        console.clear();
        console.log("")
    console.log("---------------------------------------------------------------");
        console.log("-> Jogar com a trilha sonora?");
        console.log("---------------------------------------------------------------");
        console.log("[01] Sim");
        console.log("[02] Não");
        console.log("---------------------------------------------------------------");
    
        let musicChoice = Number(prompt("> "));
        if (musicChoice === 1) {
            console.log("---------------------------------------------------------------");
            console.log ("-> O VLC está iniciando... (Isso pode demorar)")
            tocamusic()
            tocando = true
            pauseToContinue()
        } else if (musicChoice != 1 && musicChoice != 2){
            InvalidOption()
        }
    } else if (lang == 2){
        console.clear();
        console.log("")
    console.log("---------------------------------------------------------------");
        console.log("-> Play with soundtrack?");
        console.log("---------------------------------------------------------------");
        console.log("[01] Yes");
        console.log("[02] No");
        console.log("---------------------------------------------------------------");
    
        let musicChoice = Number(prompt("> "));
        if (musicChoice === 1) {
            console.log("---------------------------------------------------------------");
            console.log ("-> The VLC is starting... (May take a while)")
            tocamusic()
            tocando = true
            pauseToContinue()
        }  else if (musicChoice != 1 && musicChoice != 2){
            InvalidOption()
        }
    } else {
        InvalidOption()
    }
}

}


function Idioma() {
    console.clear();
    console.log("")
    console.log("---------------------------------------------------------------");
    console.log("-> Seleção de Idioma!!");
    console.log("-> Language Selection!!");
    console.log("---------------------------------------------------------------");
    console.log("[01] Portugues");
    console.log("[02] English");
    console.log("---------------------------------------------------------------");

    lang = Number(prompt("> "));
    if (lang == 1) {
        portugues = true;
        english = false;
    } else if (lang == 2) {
        portugues = false;
        english = true;
    } else {
        console.clear();
        console.log ("===========================================================================")
        console.log("[ERROR 444] INVALID LANGUAGE");
        console.log ("===========================================================================")
        console.log("Closing program...");
        console.log ("===========================================================================")
        process.exit();
    }
}

let config = true
function ajustarCores() {
    let config = true
    while (config) {
        console.clear()
console.log ("===========================================================================")
console.log ("[CONFIGURAÇÕES]")
console.log ("===========================================================================")
console.log ("[OPÇÕES]")
console.log ("---------------------------------------------------------------------------")
console.log ("[01] - Selecão de Idioma")
console.log ("[02] - Trilha Sonora")
console.log ("[03] - Criação de conta")
console.log ("[04] - Incluir Ester Eggs")
console.log ("[05] - Voltar ao menu")
console.log ("===========================================================================")
let escolha = Number(prompt("> "));

if (escolha == 1) {
Idioma()
} else if (escolha == 2) {
    console.log ("a")
    askForMusicPreference()
} else if (escolha == 3) {
account()
} else if (escolha == 4) {
    console.clear()
    console.log ("===========================================================================")
    console.log ("[EASTER EGGS]")
    console.log ("===========================================================================")
    console.log ("[OPÇÕES]")
    console.log ("---------------------------------------------------------------------------")
    console.log ("[01] - Ativar Easter Eggs")
    console.log ("[02] - Desativar Easter Eggs")
    console.log ("[03] - Voltar ao menu de configurações")
    console.log ("===========================================================================")
    let easterEggsChoice = Number(prompt("> "));
    if (easterEggsChoice == 1) {
        console.clear()
        console.log ("===========================================================================")
        console.log ("[EASTER EGGS]")
        console.log ("===========================================================================")
        console.log ("-> Easter Eggs Ativados!")
        console.log ("-> Easter Eggs Enabled!")
        ET = true   
        pauseToContinue()
    } else if (easterEggsChoice == 2) {
        console.clear()
        console.log ("===========================================================================")
        console.log ("[EASTER EGGS]")
        console.log ("===========================================================================")
        console.log ("-> Easter Eggs Desativados!")
        console.log ("-> Easter Eggs Disabled!")
        ET = false
        pauseToContinue()
    } else if (easterEggsChoice == 3) {
        console.clear()
        console.log ("===========================================================================")
        console.log ("[EASTER EGGS]")
        console.log ("===========================================================================")
        console.log ("-> Voltando ao menu de configurações...")
        pauseToContinue()
    } else {
        console.clear()
        console.log ("===========================================================================")
        console.log ("[EASTER EGGS]")
        InvalidOption()
    }
} else if (escolha == 5) {
config = false
desenharMenu(); // Redesenha o menu principal após sair das configurações de cor.
    process.stdin.setRawMode(true); // Retoma o modo bruto para a detecção de teclas.
    process.stdin.resume(); // Retoma a entrada padrão.
} else {

}



    }
}

// Objeto que mapeia códigos de cores (hex e numéricos) para nomes de cores e vice-versa.
const cores = {
    "0": "Preto", "1": "Azul Escuro", "2": "Verde Escuro", "3": "Ciano Escuro",
    "4": "Vermelho Escuro", "5": "Roxo Escuro", "6": "Amarelo (Oliva)", "7": "Branco (Cinza Claro)",
    "8": "Cinza Escuro", "9": "Azul Claro", "A": "Verde Claro", "B": "Ciano Claro",
    "C": "Vermelho Claro", "D": "Roxo Claro (Magenta Claro)", "E": "Amarelo Claro", "F": "Branco Brilhante",
    "Preto": "0", "Azul Escuro": "1", "Verde Escuro": "2", "Ciano Escuro": "3", "Vermelho Escuro": "4", "Roxo Escuro": "5",
    "Amarelo": "6", "Branco": "7", "Cinza Escuro": "8", "Azul Claro": "9", "Verde Claro": "A",
    "Ciano Claro": "B", "Vermelho Claro": "C", "Roxo Claro": "D", "Amarelo Claro": "E",
    "Branco Brilhante": "F"
};

// Define várias constantes de texto usadas para exibir mensagens e títulos.

const linhaDivisoria = "---------------------------------------------------------------------------";
const tituloConfigs = "CONFIGURAÇÕES";
const tituloCorTerminal = "// COR DO TERMINAL \\\\";
const tituloFundo = "*Definir uma cor de fundo:";
const tituloTexto = "*Definir uma cor de texto:";

// Listas de cores de fundo e texto com seus códigos correspondentes.
const listaFundo = [
    "0 = Preto", "1 = Azul Escuro", "2 = Verde Escuro", "3 = Ciano Escuro", "4 = Vermelho Escuro", "5 = Roxo Escuro",
    "6 = Amarelo", "7 = Branco", "8 = Cinza Escuro", "9 = Azul Claro"
];

const listaTexto = [
    "A = Verde Claro", "B = Ciano Claro", "C = Vermelho Claro",
    "D = Roxo Claro", "E = Amarelo Claro", "F = Branco Brilhante"
];

// Função para normalizar a entrada de cor (por exemplo, "preto" para "Preto" ou "0" para "0").
function arrumarEntradaCor(entrada) {
    if (!entrada) return '';
    entrada = entrada.trim();
    if (entrada.length === 1 && cores[entrada.toUpperCase()]) {
        return entrada.toUpperCase();
    }
    return entrada.split(' ').map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()).join(' ');
}

// Função para desenhar o menu principal no console.
function desenharMenu() {
    console.clear(); // Limpa a tela do console.
    // Logo em arte ASCII.
    console.log ("██████╗  █████╗ ██╗     ███████╗ TM           ███████████");
    console.log ("██╔══██╗██╔══██╗██║     ██╔════╝           █████████████████ ");
    console.log ("██████╔╝███████║██║     █████╗           █████████████████████ ");
    console.log ("██╔═══╝ ██╔══██║██║     ██╔══╝          ███████████████████████ ");
    console.log ("██║     ██║  ██║███████╗███████╗      ███████████████████████████");
    console.log ("╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝      ███████████████████████████");
    console.log ("██╗     ██╗   ██╗███╗   ██╗ █████╗    ███████████████████████████");
    console.log ("██║     ██║   ██║████╗  ██║██╔══██╗   ███████████████████████████");
    console.log ("██║     ██║   ██║██╔██╗ ██║███████║     ███████████████████████");
    console.log ("██║     ██║   ██║██║╚██╗██║██╔══██║      █████████████████████ ");
    console.log ("███████╗╚██████╔╝██║ ╚████║██║  ██║        █████████████████");
    console.log ("╚══════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝           ███████████ ");
    console.log ("---------------------------------------------------------------");
    console.log ("--- TERMINAL EDITION - FEITO POR SAD BERRY GAMES ---")
    console.log ("---------------------------------------------------------------");

    // Itera sobre os itens do menu e exibe o selecionado com "> <".
    menuItems.forEach((item, index) => {
        if (index === selectedIndex) {
            console.log(`\x1b[91m[> ${item} <] \x1b[96m`);
        } else {
            console.log(`  ${item}`);
        }
    });
    console.log('\nUse as setas para cima/baixo para navegar, Enter para selecionar.');
}

function pausarParaContinuar() {
    console.log("---------------------------------------------------------------");
    console.log("-> Pressione [1] para continuar...");
    console.log("---------------------------------------------------------------");
    while (prompt("> ") !== '1') {
        // Fica em loop até o jogador pressionar 1
    }
    console.clear();
}
function conquistas() {
    const count = fs.readdirSync(folderPath).filter(f => f.endsWith('.bin')).length;
    const finais = fs.readdirSync(folderPath).filter(f => f.endsWith('.bin'));
    console.clear()
        console.log("---------------------------------------------------------------");
            console.log("-> Verificando a pasta...")

    if (count > 0) {
                console.log("---------------------------------------------------------------");
            console.log("-> ARQUIVOS ENCONTRADOS:")
                console.log(finais)
                console.log("---------------------------------------------------------------");
                console.log("-> Se você deseja manter esses finais, NÃO RESTAURE")
            pausarParaContinuar()
    } else {
            console.log("---------------------------------------------------------------");
                console.log("-> Nenhum arquivo de final encontrado!")
            pausarParaContinuar()
    }

     desenharMenu(); // Redraws the main menu after exiting color settings.
    process.stdin.setRawMode(true); // Resumes raw mode for keypress detection.
    process.stdin.resume(); // Resumes stdin.
}

// Função para lidar com os ajustes de cor do terminal.
function ajustarCores1() {
    let toNessaTelaDeCor = true; // Flag para continuar o loop na tela de configurações de cor.

    while (toNessaTelaDeCor) {
        console.clear();
        console.log(linhaDivisoria);
        console.log(tituloConfigs);
        console.log(linhaDivisoria);
        console.log(tituloCorTerminal);
        console.log("");
        console.log(tituloFundo);
        listaFundo.forEach(item => console.log(item)); // Exibe as cores de fundo disponíveis.
        console.log("");
        console.log(tituloTexto);
        listaTexto.forEach(item => console.log(item)); // Exibe as cores de texto disponíveis.
        console.log("");
        console.log(linhaDivisoria);
        console.log("-> Para voltar ao Menu Principal, basta pressionar ENTER para ambas as opções.");
        console.log("-> Você pode mudar as cores várias vezes aqui!");
        console.log(linhaDivisoria);

        let inputFundo = prompt("Cor de fundo (digite o nome, ex.: Preto): ");
        let inputTexto = prompt("Cor de texto (digite o nome, ex.: Verde Claro): ");

        // Verifica se o usuário quer voltar ao menu principal.
        if (inputFundo.trim() === '0' || (inputFundo.trim() === '' && inputTexto.trim() === '')) {
            toNessaTelaDeCor = false;
            console.clear();
            console.log("Retornando ao Menu Principal...");
            break;
        }

        // Obtém os códigos das cores a partir da entrada do usuário.
        const codigoDoFundo = cores[arrumarEntradaCor(inputFundo)];
        const codigoDoTexto = cores[arrumarEntradaCor(inputTexto)];
        
        // Validação da entrada de cores.
        if (!codigoDoFundo || !codigoDoTexto) {
            console.clear();
            console.log(linhaDivisoria);
            console.log("-> Erro: Uma ou ambas as cores digitadas estão incorretas!");
            console.log("-> Por favor, digite os nomes ou códigos (0-F) exatamente como aparecem na lista.");
            console.log(linhaDivisoria);
            prompt("Pressione ENTER para tentar novamente...");
        } else if (codigoDoFundo === codigoDoTexto) { // Verifica se as cores de fundo e texto são as mesmas.
            console.clear();
            console.log(linhaDivisoria);
            console.log("-> Erro: A cor de fundo e a de texto não podem ser a mesma! Você não conseguirá ler nada!");
            console.log("-> Por favor, escolha cores diferentes para o fundo e o texto.");
            console.log(linhaDivisoria);
            prompt("Pressione ENTER para tentar novamente...");
        } else {
            // Constrói o comando para mudar as cores do terminal.
            const comandoCor = `COLOR ${codigoDoFundo}${codigoDoTexto}`;
            try {
                execSync(comandoCor, { stdio: 'inherit' }); // Executa o comando de forma síncrona.

                console.clear();
                console.log(linhaDivisoria);
                console.log("-> CORES DO TERMINAL ALTERADAS COM SUCESSO!");
                console.log(linhaDivisoria);
                // Exibe as cores escolhidas.
                console.log(`Fundo: ${listaFundo.find(item => item.startsWith(codigoDoFundo)) || codigoDoFundo}`);
                console.log(`Texto: ${listaTexto.find(item => item.startsWith(codigoDoTexto)) || codigoDoTexto}`);
                console.log(linhaDivisoria);
                console.log("-> As cores do seu terminal agora estão diferentes!");
                prompt("Pressione ENTER para definir mais cores ou voltar...");
            } catch (error) {
                // Tratamento de erro se a alteração das cores falhar (por exemplo, não está no Windows).
                console.clear();
                console.log(linhaDivisoria);
                console.log("-> FALHA ao mudar as cores.");
                console.log("-> Certifique-se de que está executando isto em um terminal Windows (CMD ou PowerShell).");
                console.log(`Erro técnico: ${error.message}`);
                console.log(linhaDivisoria);
                prompt("Pressione ENTER para tentar novamente...");
            }
        }
    }
    desenharMenu(); // Redesenha o menu principal após sair das configurações de cor.
    process.stdin.setRawMode(true); // Retoma o modo bruto para a detecção de teclas.
    process.stdin.resume(); // Retoma a entrada padrão.
}

desenharMenu(); // Desenha o menu inicial.

process.stdin.setRawMode(true); // Define a entrada padrão para o modo bruto para capturar o pressionamento de teclas individuais.
process.stdin.resume(); // Retoma a entrada padrão, permitindo que ela emita eventos 'data'.

// Listener de eventos para dados de entrada (pressionamento de teclas).
process.stdin.on('data', (chunk) => {
    const key = chunk.toString('hex'); // Converte o buffer da tecla para uma string hexadecimal.

    switch (key) {
        case '1b5b41': // Tecla de seta para cima
            selectedIndex = (selectedIndex - 1 + menuItems.length) % menuItems.length; // Move a seleção para cima, com loop.
            desenharMenu();
            break;
        case '1b5b42': // Tecla de seta para baixo
            selectedIndex = (selectedIndex + 1) % menuItems.length; // Move a seleção para baixo, com loop.
            desenharMenu();
            break;
        case '0d': // Tecla Enter
            console.clear();
            
            if (selectedIndex === 0) { // Opção "Iniciar Jogo"
                rl.close(); // Fecha a interface readline.
                process.stdin.pause(); // Pausa a entrada padrão.
                console.log('Iniciando o jogo...');
if (ET) {
    fs.writeFileSync('./assets/ET.txt', 'Easter Eggs Ativados', 'utf8'); // Cria um arquivo para ativar Easter Eggs.
}
                require('./mainBR.js'); // Requer um script externo para iniciar o jogo.
            } else if (selectedIndex === 4) { // Opção "Sair"
                console.log('Saindo do menu...');
                rl.close();
                process.exit(); // Sai do processo Node.js.
            } else if (selectedIndex === 1) { // Opção "Excluir progresso"
                process.stdin.setRawMode(false); // Desativa o modo bruto antes de executar o comando externo.
                process.stdin.pause(); // Pausa a entrada padrão.
                exec('start cmd.exe /c Erase_Data.bat', (error) => { // Executa o arquivo batch em uma nova janela.
                    if (error) {
                        console.error(`Erro ao executar o arquivo: ${error.message}`);
                    } else {
                        console.log('O comando Erase_Data.bat foi executado com sucesso.');
                    }
                    console.log('\nPressione ENTER para voltar ao menu...');
                    prompt(''); // Espera o usuário pressionar Enter.
                    desenharMenu(); // Redesenha o menu.
                    process.stdin.setRawMode(true); // Reabilita o modo bruto.
                    process.stdin.resume(); // Retoma a entrada padrão.
                });
            } else if (selectedIndex === 2) { // Opção "Ver Conquistas"
                process.stdin.setRawMode(false);
                process.stdin.pause();
                conquistas();
            } else if (selectedIndex === 3) { // Opção "Mudar para Inglês"
                process.stdin.setRawMode(false);
                process.stdin.pause();
                
                ajustarCores();
                
            }
            break;
        case '03': // Ctrl+C (SIGINT)
            console.log('\nSaindo do menu...');
            rl.close();
            process.exit();
            break;
        default: // Lida com qualquer outro pressionamento de tecla (não faz nada).
            break;
    }
});

// Listener de eventos para quando a interface readline é fechada.
rl.on('close', () => {
    console.log('\nMenu encerrado.');
});