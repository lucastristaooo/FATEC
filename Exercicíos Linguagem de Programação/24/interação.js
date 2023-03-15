function calcular(){
    var resposta = document.getElementById("resposta")
    resposta.innerHTML = " "
    for(var c = 1; c <= 10; c++){
        for(var i=1; i <=10; i++){
            resposta.innerHTML += `${c} * ${i} = ${c * i} <br>`
        }
    }
}
    