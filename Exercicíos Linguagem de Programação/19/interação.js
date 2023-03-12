function calcular(){
    var salário = document.getElementById("n1")
    var resposta = document.getElementById("resposta")
    if(Number(n1.value) <= 12000 && Number(n1.value) <= 300){
        resposta.innerHTML = `Preço a ser cobrado: ${(Number(n1.value) * 0.5) + Number(n1.value)}`
    }
    else if(Number(n1.value) > 12000 && Number(n1.value) <= 25000){
        resposta.innerHTML = `Preço a ser cobrado: ${(Number(n1.value) * 0.10) + Number(n1.value) + (Number(n1.value) * 0.15) + Number(n1.value)}`
    }
    else{
        resposta.innerHTML = `Preço a ser cobrado: ${(Number(n1.value) * 0.15) + Number(n1.value) + (Number(n1.value) * 0.20) + Number(n1.value)}`
    }
}