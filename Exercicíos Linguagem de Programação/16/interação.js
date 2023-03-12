function calcular(){
    var salário = document.getElementById("n1")
    var resposta = document.getElementById("resposta")
    if(Number(n1.value) <= 500){
        resposta.innerHTML = `Aumento de 30% concedido, novo salário ${(Number(n1.value) * 0.3) + Number(n1.value)}`
    }
    else{
        resposta.innerHTML = "Não receberá aumento"
    }
}