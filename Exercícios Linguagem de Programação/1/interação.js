function calcular(){
    var n1 = document.getElementById("n1") 
    var n2 = document.getElementById("n2") 
    var n3 = document.getElementById("n3")
    var resposta = document.getElementById("resposta")
    var calculo = Number(n1.value) * Number(n2.value)
    resposta.innerHTML = `o resultado da multiplicação é de ${calculo * Number(n3.value)}`
}