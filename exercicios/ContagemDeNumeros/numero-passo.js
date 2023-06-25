function contar() {
    const inicio = document.getElementById('numeroInicial')
    const fim = document.getElementById('numeroFinal')
    const passo = document.getElementById('numPasso')

    const resultado = document.querySelector('.res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = 'Inpossivél contar'
    } else {
        resultado.innerHTML = 'Contando: <br><br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando passo = 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} \u{1F603} `
            }
        } else {
            // Contagem regerssiva
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c} \u{1F603} `
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
        
    }
}