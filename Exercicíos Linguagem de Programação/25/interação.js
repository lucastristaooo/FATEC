function calcular(){
    var resposta = document.getElementById("resposta")
    resposta.innerHTML = " "
    var total = 0
    var total2 = 0
    var total3 = 0
    var total4 = 0
    for(var c = 1; c <= 6; c++){
        var idade = prompt("Digite a idade: ")
        var peso = prompt("Digite o peso: ")
        var altura = prompt("Digite a ultura: ")
        var cabelo = prompt("Digite a cor dos cabelos: ")
        var cor = prompt("Digite a cor dos olhos: ")
        if(10 < Number(idade) < 50 && Number(peso) < 60){
            total += 1
        }
        else if(Number(altura) <= 1.5){
            total2 += 1
        }
        else if(cor == "Azul" || cor == "azul" || cor == "AZUL"){
            total3 += 1
        }
        else if(cor != "azul" && cabelo == ruivo){
            total4 += 1
        }
    }
    resposta.innerHTML = `Pessoas entre 10 e 50 anos com menos de 90kg = ${Number(total)} <br>`
    resposta.innerHTML += `Pessoas com menos de 1.50 = ${total2} <br>`
    resposta.innerHTML += `Porcentagem de pessoas com olho azul = ${6 / total3}% <br>`
    resposta.innerHTML += `Pessoas ruivas de cor de olho não azul = ${total4}`
}

    