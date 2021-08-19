function Juse() {
    inicio()
    document.getElementsByTagName("body")[0].id = "juse"
    document.write(`<h1>SÉRIO mesmo?</h1>
    <h2>certamente um estagiário não tem poder aquisitivo para participar.</h2>
    <h2>Porco ganancioso.</h2>`)
    setTimeout(mostrarPromptJuseAssacinoFase1, 7000)
}

function mostrarPromptJuseAssacinoFase1() {
    var escolha = alert(`PORQUE VC FEZ ISSO?`)
}