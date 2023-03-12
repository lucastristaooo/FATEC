function calcular(){
    var lado = document.getElementById("lado")
    var area = (Number(lado.value) * Number(lado.value))
    resposta.innerHTML = `Área é igual a ${area}`
}