function calcular(){
    var peso = document.getElementById("peso")
    var resposta = document.getElementById("resposta")
    var engorda = Number(peso.value) * 0.15
    var emagrece = Number(peso.value) * 0.20
    resposta.innerHTML = `Caso engorde 15%: ${Number(peso.value)+Number(engorda)} <br> Caso emagreça 20%: ${Number(peso.value) - Number(emagrece)}`
}