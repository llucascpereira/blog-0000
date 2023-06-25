var idade = 65

if (idade < 16) {
    console.log('Não vota!')
} else if (idade < 18 || idade > 64) {
    console.log('Voto opcional!')
} else {
    console.log('Voto obrigatório!')
}