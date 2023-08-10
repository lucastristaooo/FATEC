function calcular(){
    var resposta = document.getElementById("resposta")
    var op = prompt(`Opções: \n 1 - Média aritmética \n 2 - Média ponderada \n 3 - Sair`)
    resposta.innerHTML = " "
    if(Number(op) == 1){
        var n = 0
        var contador = 0
        while(c != "N" ){
            n += Number(prompt("Adicione um número"))
            var c = prompt("Deseja continuar? (S/N)")
            contador += 1
        }
        resposta.innerHTML = `${Number(n) / Number(contador) }`
    }
    if(Number(op) == 2){
        var n = 0
        var nota = 0
        var contador = 0
        while(c != "N" ){
            n = Number(prompt("Adicione um número"))
            var peso = Number(prompt("Qual o peso da nota?"))
            nota += n * peso
            var c = prompt("Deseja continuar? (S/N)")
            contador += 1
        }
        resposta.innerHTML = `${Number(nota) / Number(contador) }`
    }
    else{
        alert("Ok, tenha um bom dia!")
    }
}