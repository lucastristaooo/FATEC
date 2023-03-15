function calcular(){
    var numero = document.getElementById("numero")
    var resposta = document.getElementById("resposta")
    resposta.innerHTML = " "
    for(var i=0; i <=9; i++){
        resposta.innerHTML += `${Number(numero.value)} * ${i} = ${Number(numero.value) * i} <br>`
    }
}
    