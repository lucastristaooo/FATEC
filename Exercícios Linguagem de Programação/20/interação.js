function calcular(){
    var x = 1
    var lista = []
    var lista1 = []
    var lista2 = []
    var lista3 = []
    var lista4 = []
    var reposta = document.getElementById("resposta")
    reposta.innerHTML = " "
    while(x <= 4){
        while(lista.length <= 4){
            var p = prompt("Digite um número")
            lista.push(p) 
        }
        while(lista1.length <= 4){
            var z = prompt("Digite um número")
            lista1.push(z)
        }
        while(lista2.length <= 4){
            var y = prompt("Digite um número")
            lista2.push(y)
        }
        while(lista3.length <= 4){
            var w = prompt("Digite um número")
            lista3.push(w)
        }
        while(lista4.length <= 4){
            var b = prompt("Digite um número")
            lista4.push(b)
        }
        x += 1
    }
    reposta.innerHTML += `1 <br> Números digitados: ${lista} <br>`
    reposta.innerHTML += `Números digitados em ordem crescente: ${lista.sort()} <br>`
    reposta.innerHTML += `Números digitados em ordem decrescente: ${lista.reverse()} <br>`
    reposta.innerHTML += " "
    reposta.innerHTML += `2 <br>Números digitados: ${lista1} <br>`
    reposta.innerHTML += `Números digitados em ordem crescente: ${lista1.sort()} <br>`
    reposta.innerHTML += `Números digitados em ordem decrescente: ${lista1.reverse()} <br>`
    reposta.innerHTML += " "
    reposta.innerHTML += `3 <br>Números digitados: ${lista2} <br>`
    reposta.innerHTML += `Números digitados em ordem crescente: ${lista2.sort()} <br>`
    reposta.innerHTML += `Números digitados em ordem decrescente: ${lista2.reverse()} <br>`
    reposta.innerHTML += " "
    reposta.innerHTML += `4 <br>Números digitados: ${lista3} <br>`
    reposta.innerHTML += `Números digitados em ordem crescente: ${lista3.sort()} <br>`
    reposta.innerHTML += `Números digitados em ordem decrescente: ${lista3.reverse()} <br>`
    reposta.innerHTML += " "
    reposta.innerHTML += `5 <br>Números digitados: ${lista4} <br>`
    reposta.innerHTML += `Números digitados em ordem crescente: ${lista4.sort()} <br>`
    reposta.innerHTML += `Números digitados em ordem decrescente: ${lista4.reverse()} <br>`
} 