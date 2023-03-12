function calcular(){
    var n1 = document.getElementById("n1")
    var n2 = document.getElementById("n2")
    var resposta = document.getElementById("resposta")
    if(Number(n1.value.length == 0) || Number(n2.value.length == 0)){
        alert("Preencha todos os campos")
        resposta.innerHTML = " "
    }
    else{
        if(Number(n1.value) > Number(n2.value)){
            resposta.innerHTML = `${Number(n1.value)} é o maior <br> ${Number(n2.value)} é o menor`
        }
        else if(Number(n1.value) == Number(n2.value)){
            resposta.innerHTML = `${Number(n1.value)} e ${Number(n1.value)} são iguais`
        }
        else{
            resposta.innerHTML = `${Number(n2.value)} é o maior <br> ${Number(n1.value)} é o menor`
        }
    }
}