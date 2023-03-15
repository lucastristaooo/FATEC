function calcular(){
    var resposta = document.getElementById("resposta")
    resposta.innerHTML = " "
    var total = 0
    var total2 = 0
    for(var c = 1; c <= 10; c++){
        var valor = prompt("Digite o valor: ")
        if(valor % 2 == 0){
            total += Number(valor)
        }
        else{
            total2 += Number(valor)
        }
    var totaltudo = Number(total) + Number(total2)
    resposta.innerHTML = `Total dos números pares ${total} <br>`
    resposta.innerHTML += `Total dos números primos ${total2} <br>`
    resposta.innerHTML += `Total tudo ${totaltudo} <br>`
    }
}

    