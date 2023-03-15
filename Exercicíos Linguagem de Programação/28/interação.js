function calcular(){
    var resposta = document.getElementById("resposta")
    resposta.innerHTML = " "
    var total = 0
    var total2 = 0
    var total3 = 0
    for(var c = 1; c <= 10; c++){
        var idade = prompt("Digite a idade: ")
        var peso = prompt("Digite o peso: ")
        var altura = prompt("Digite a ultura: ")
        total += Number(idade)
        if(Number(peso) > 90 && Number(altura) <= 1.5){
            total2 += 1
        }
        else if(10 < Number(idade) < 30 && Number(altura) > 1.9){
            total3 += 1
        }
    }
    resposta.innerHTML = `Soma de idades = ${Number(total)} <br>`
    resposta.innerHTML += `Pessoas com menos de 1.50 e mais de 90kg = ${total2} <br>`
    resposta.innerHTML += `Porcentagem de pessoas de 10 a 30 anos com mais de 1.90 = ${10 / total3}% <br>`
}

    