function Somar() {
    let soma1 = document.getElementById('soma')
    let soma2 = document.getElementById('soma2')
    let res1 = document.getElementById('res1')

    if (soma1.value + soma2.value < 0) {
        window.alert(`Tente um valor positivo`)
    } else {
        var val = Number(soma1.value) + Number(soma2.value)
        res1.innerHTML = `O valor da soma é ${val}`
    }
}
function Diminuir() {
    let dim1 = document.getElementById('dim')
    let dim2 = document.getElementById('dim2')
    let res2 = document.getElementById('res2')

    if (dim1.value - dim2.value < 0) {
        window.alert(`Tente um valor positivo`)
    } else {
        var val2 = Number(dim1.value) - Number(dim2.value)
        res2.innerHTML = `O valor da Subtração é de ${val2} `
    }
}
function Multiplicar() {
    let mult1 = document.getElementById('mult')
    let mult2 = document.getElementById('mult2')
    let res3 = document.getElementById('res3')

    if (mult1.value * mult2.value < 0) {
        window.alert(`Tente um valor positivo`)
    } else {
        var val3 = Number(mult1.value) * Number(mult2.value)
        res3.innerHTML = `O valor da Multiplicação é de ${val3} `
    }
}