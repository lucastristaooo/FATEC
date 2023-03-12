function calcular(){
    var n1 = document.getElementById("n1")
    var n2 = document.getElementById("n2")
    var n3 = document.getElementById("n3")
    var n4 = document.getElementById("n4")
    var resposta = document.getElementById("resposta")
    if(Number(n1.value.length == 0) || Number(n2.value.length == 0) || Number(n3.value.length == 0) || Number(n4.value.length == 0)){
        alert("Preencha todos os campos")
        resposta.innerHTML = " "
    }
    else{
        var media = (Number(n1.value) + Number(n2.value) + Number(n3.value) + Number(n4.value)) / 4
        if(Number(media) >= 7){
            resposta.innerHTML = `Média = ${media}, aprovado`
        }
        else{
            resposta.innerHTML= `Média = ${media}, reprovado`
        }
    }
}