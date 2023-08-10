function calcular(){
    var resposta = document.getElementById("resposta")
    var deseja = Number(prompt("Quantos votos serão executados?"))
    resposta.innerHTML = " "
    var branco = 0
    var nulo = 0
    var can1 = 0
    var can2 = 0
    var can3 = 0
    var can4 = 0
    for(var i = 0; i++; i < Number(deseja)){
        var op = prompt(`Opções: \n 1, 2, 3, 4 - Votos para os respectivos canditados \n 5 - Nulo \n 6 - Branco`)
        if(Number(op) == 1){
            can1 += 1
        }
        else if(Number(op) == 2){
            can2 += 1
        }
        else if(Number(op) == 3){
            can3 += 1
        }
        else if(Number(op) == 4){
            can4 += 1
        }
        else if(Number(op) == 5){
            nulo += 1
        }
        else{
            branco += 1
        }
    }
    resposta.innerHTML = `Total de votos nulos ${nulo}`
    resposta.innerHTML += `Total de votos brancos ${branco}`
}