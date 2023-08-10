function calcular(){
    var n1 = document.getElementById("n1")
    var n2 = document.getElementById("n2")
    var resposta = document.getElementById("resposta")
    var opt = document.getElementsByName("opt1")
    if(opt[0].checked){
        resposta.innerHTML = `Média = ${(Number(n1.value) + Number(n2.value)) / 2}`
    }
    else if(opt[1].checked){
        var conta = Math.max(Number(n1.value), Number(n2.value))
        var conta1 = Math.min(Number(n1.value), Number(n2.value))
        resposta.innerHTML = `Diferença do maior para o menor = ${conta - conta1}`
    }
    else if(opt[2].checked){
        resposta.innerHTML = `Soma = ${Number(n1.value) + Number(n2.value)}`
    }
    else{
        resposta.innerHTML = `Divisão = ${Number(n1.value) / Number(n2.value)}`
    }
}