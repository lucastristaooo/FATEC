function calcular(){
    var n1 = document.getElementById("n1")
    var n2 = document.getElementById("n2")
    var opt = document.getElementsByName("opt")
    var resposta = document.getElementById("resposta")
    if(opt[0].checked){
        resposta.innerHTML = `Número elevado = ${(Number(n1.value) ** Number(n2.value))}`
    }
    else if(opt[1].checked){
        resposta.innerHTML = `Raíz quadrada = ${Number(n1.value) * 0.5} / ${Number(n2.value) * 0.5} `
    }
    else if(opt[2].checked){
        resposta.innerHTML = `Raíz quadrada = ${Number(n1.value) * 0.5} / ${Number(n2.value) * 0.5} `
    }
    else{
        resposta.innerHTML = alert("Opção inválida")
    }
}