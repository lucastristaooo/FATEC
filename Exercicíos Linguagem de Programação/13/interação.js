function calcular(){
    var n1 = document.getElementById("n1")
    var n2 = document.getElementById("n2")
    var n3 = document.getElementById("n3")
    var resposta = document.getElementById("resposta")
    resposta.innerHTML = Math.max(Number(n1.value), Number(n2.value), Number(n3.value))
}