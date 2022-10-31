function calcular() {
    let num1 = document.getElementById('txn1')
    let num2 = document.getElementById('txn2')
    let res = document.getElementById('res')
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let s = n1 + n2
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s}`
}