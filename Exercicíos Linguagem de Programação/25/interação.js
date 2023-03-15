function calcular(){
    var resposta = document.getElementById("resposta")
    resposta.innerHTML = " "
    var total = 0
    var total2 = 0
    var lista = []
    for(var c = 1; c <= 15; c++){
        var codigo = prompt("Digite o código (V/P): ")
        if(codigo == "V"){
            var valor = prompt("Digite o valor: ")
            total += valor
        }
        else{
            var valor = prompt("Digite o valor: ")
            total2 += valor
            lista.push(valor)
        }
    var totaltudo = total + total2
    resposta.innerHTML = `Total a vista ${total} <br>`
    resposta.innerHTML += `Total a prazo ${total2} <br>`
    resposta.innerHTML += `Total tudo ${totaltudo} <br>`
    resposta.innerHTML += `Primeira prestação a prazo divida em três vezes ${lista[0] / 3} <br>`

    }
}

    