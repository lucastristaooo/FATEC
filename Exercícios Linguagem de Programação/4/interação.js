function calcular(){
    var n1 = document.getElementById("n1")
    var resposta = document.getElementById("resposta")
    var calculo = Number(n1.value) * 0.10
    resposta.innerHTML = `O novo preço é de ${Number(n1.value) - calculo}`
}