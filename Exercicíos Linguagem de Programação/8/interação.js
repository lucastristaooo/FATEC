function calcular(){
    var maior = document.getElementById("maior")
    var menor = document.getElementById("menor")
    var altura = document.getElementById("altura")
    var resposta = document.getElementById("resposta")
    var area = (Number(maior.value) + Number(menor.value)) * (Number(altura.value) / 2)
    resposta.innerHTML = `Área é igual a ${area}`
}