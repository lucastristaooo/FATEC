function calcular(){
    var peso = document.getElementById("peso")
    var resposta = document.getElementById("resposta")
    resposta.innerHTML = `Peso em gramas: ${Number(peso.value) * 1000}`
}