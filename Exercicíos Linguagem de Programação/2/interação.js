function calcular(){
    var n1 = document.getElementById("n1")
    var n2 = document.getElementById("n2")
    var resposta = document.getElementById("resposta")
    if(Number(n2.value) == 0){
        alert("O NÚMERO NÃO PODE SER DIVIDO POR 0")
    }
    else{
        resposta.innerHTML = `O resultado da divisão é ${Number(n1.value) * Number(n2.value)}`
    }
}