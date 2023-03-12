function calcular(){
    var salário = document.getElementById("n1")
    var resposta = document.getElementById("resposta")
    if(Number(n1.value) <= 300){
        resposta.innerHTML = `Aumento de 35% concedido, novo salário ${(Number(n1.value) * 0.35) + Number(n1.value)}`
    }
    else{
        resposta.innerHTML = `Aumento de 15%, novo salário ${(Number(n1.value) * 0.15) + Number(n1.value)} `
    }
}