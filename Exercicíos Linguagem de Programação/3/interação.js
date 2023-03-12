function calcular(){
    var n1 = document.getElementById("n1")
    var n2 = document.getElementById("n2")
    var resposta = document.getElementById("resposta")
    var calculo = (Number(n1.value) * 2 ) + (Number(n2.value) * 3)
    resposta.innerHTML = `O resultado da média é ${calculo/2}`
}