function calcular(){
    var n1 = document.getElementById("n1")
    var n2 = document.getElementById("n2")
    var resposta = document.getElementById("resposta")
    resposta.innerHTML = `O resultado da subtração é ${Number(n1.value) - Number(n2.value)}`
}