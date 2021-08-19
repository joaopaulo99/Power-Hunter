function Beatris() {
    inicio()
    document.getElementsByTagName("body")[0].id = "beatris"
    document.write(`<h1>Você está no Jogo.</h1>`)
    setTimeout(mostrarPromptBeatrisFase1, 5000)
}

function mostrarPromptBeatrisFase1() {
    var escolha = prompt(`
Você quer participar desse desafio realmente?
1- Sim
2- não
`)


    while (true) {
        if (escolha == 1 || escolha == 2) {
            break
        }
        escolha = prompt(`   programação limitada, por favor,
        escolha uma opção abaixo utilizando 1 ou 2!
    1-sim
    2-não    
        `)
    }
    if (escolha == 1) {
        textoFase2Opçao1()
    } else {
        textoFase2Opçao2()
    }
}

function textoFase2Opçao1() {
    document.write(`
<h1>Que bom q ainda está participando, o assassino foi encontrado e preso.</h1>
<h1>você é a unica participante competente q o governo tem.</h1>
`)
    setTimeout(mostrarVitoria, 5000)


}

function textoFase2Opçao2() {
    document.write(`
    <h1>Poxa! você era a unica esperança q o governo tinha.</h1>
    `)
}



function mostrarVitoria() {
    var escolha = prompt(`
Você sabe o que siginifica?
1-acho que sim
2-não faço ideia
    `)

    while (true) {
        if (escolha == 1 || escolha == 2) {
            break
        }
        escolha = prompt(`
        programação limitada, por favor,
    escolha uma opção abaixo utilizando 1 ou 2!
    1-sei
    2-não sei    
        `)
    }
    if (escolha == 1) {
        textoDaVitoria()
    } else {
        textoDaVitoria()
    }
}

function textoDaVitoria() {
    document.write(`<h1>Voce venceu!</h1>`)
}

// function textoFase3Opçao1() {
//     document.write(`
// <h1>opçao 1 escolhida</h1>
// `)


// }

// function textoFase3Opçao2() {
//     document.write(`
//     <h1>opçao 2 escolhida</h1>
//     `)
// }