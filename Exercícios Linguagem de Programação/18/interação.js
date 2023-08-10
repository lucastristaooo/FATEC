function calcular(){
    var salário = document.getElementById("n1")
    var resposta = document.getElementById("resposta")
    if(Number(n1.value) > 400){
        resposta.innerHTML = `Aumento de 30% concedido, Crédito = ${(Number(n1.value) * 0.3)} - Saldo médio = ${Number(n1.value)}`
    }
    else if(Number(n1.value) > 300 && Number(n1.value) <= 400){
        resposta.innerHTML = `Aumento de 25% concedido, Crédito = ${(Number(n1.value) * 0.25)} - Saldo médio = ${Number(n1.value)}`
    }
    else if(Number(n1.value) > 200 && Number(n1.value) <= 300){
        resposta.innerHTML = `Aumento de 20% concedido, Crédito = ${(Number(n1.value) * 0.2)} - Saldo médio = ${Number(n1.value)}`
    }
    else{
        resposta.innerHTML = `Aumento de 10%, Crédito = ${(Number(n1.value) * 0.1)} - Saldo médio = ${Number(n1.value)}`
    }
}