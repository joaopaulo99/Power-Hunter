function Jao() {
    inicio()
    document.getElementsByTagName("body")[0].id = "joao"
    document.write(`<h1>você está no jogo.</h1>
     <h3>A partir deste ponto,</h3>
     <h3>você deve estar consiente da ganancia deste mundo.</h3>
    <h3>Muitos estão de olho no premio ao qual o governo ofertou!</h3>`)
    setTimeout(mostrarPromptJoaoFase1, 5000)
}

function mostrarPromptJoaoFase1() {
    var escolha = prompt(`
deseja continuar?
1-sim.
2-não.
    `)

    while (true) {
        if (escolha == 1 || escolha == 2) {
            break
        }
        escolha = prompt(`   programação limitada, por favor,
        escolha uma opção abaixo utilizando 1 ou 2!
    1-opçao 1
    2-opçao 2    
        `)
    }
    if (escolha == 1) {
        textoJoaoFase2()
    } else {
        textoFase2vivo()
    }
}

function textoJoaoFase2() {
    document.write(`
    <p></p>
<h1>A ganancia de um dos participantes</h1> 
<h1> foi o suficiente para </h1>
<h1>desencadear uma serie de assacinatos.</h1>
<h1>Você está morto!</h1>
`)
        // setTimeout(mostrarPromptJoaoFase2, 5000)


}

function textoFase2vivo() {
    document.write(`
    <h1>Essa foi por pouco. você está a salvo.</h1>
    `)
}



// function mostrarPromptJoaoFase2() {
//     var escolha = prompt(`
// escolha uma opção abaixo fase 2!
// 1-opçao 1
// 2-opçao 2    
//     `)

//     while (true) {
//         if (escolha == 1 || escolha == 2) {
//             break
//         }
//         escolha = prompt(`
//     escolha uma opção abaixo!
//     1-opçao 1
//     2-opçao 2    
//         `)
//     }
//     if (escolha == 1) {
//         textoFase2Opçao1()
//     } else {
//         textoFase2Opçao2()
//     }
// }

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