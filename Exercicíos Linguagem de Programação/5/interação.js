function calcular(){
    var salário = document.getElementById("salário")
    var vendas = document.getElementById("vendas")
    var resposta = document.getElementById("resposta")
    var porcentagem = Number(vendas.value) * 0.4
    var calculo = (Number(salário.value) + porcentagem )
    resposta.innerHTML = `O novo salário é de ${Number(calculo)} e a comissão é de ${Number(porcentagem)}`
}