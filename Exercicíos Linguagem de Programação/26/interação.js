function calcular(){
    var resposta = document.getElementById("resposta")
    resposta.innerHTML = " "
    var total = 0
    var total2 = 0
    var total3 = 0
    var total4 = 0
    for(var c = 1; c <= 5; c++){
        var idade = prompt("Digite a idade: ")
        var peso = prompt("Digite o peso: ")
        var altura = prompt("Digite a ultura: ")
        if(Number(idade) > 50){
            total += 1
        }
        else if(Number(idade) >= 10 && Number(idade) <= 20){
            total2 += idade
            total4 += 1
        }
        else if(Number(peso) < 40){
            total3 += 1
        }
    }
    resposta.innerHTML = `Pessoas com mais de 50 anos = ${Number(total)} <br>`
    resposta.innerHTML += `Média de altura entre pessoas com 10 e 20 anos = ${total2 / total4} <br>`
    resposta.innerHTML += `Porcentagem de pessoas com peso inferior a 40kg = ${5 / total3}% <br>`
}

    