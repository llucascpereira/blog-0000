function calcular() {
    const numeroInicial = document.getElementById('numero')
    const tab = document.getElementById('res')

    if (numeroInicial.value.length == 0) {
        tab.innerHTML = '[ERRO]'
    } else {
        let n = Number(numeroInicial.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}