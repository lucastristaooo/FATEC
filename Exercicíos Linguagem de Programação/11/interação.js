function calcular(){
    var n1 = document.getElementById("n1")
    var n2 = document.getElementById("n2")
    var resposta = document.getElementById("resposta")
    if(Number(n1.value.length == 0) || Number(n2.value.length == 0)){
        alert("Preencha todos os campos")
        resposta.innerHTML = " "
    }
    else{
        var media = (Number(n1.value) + Number(n2.value) / 2)
        if(Number(media) < 3){
            resposta.innerHTML = `Média = ${media}, reprovado`
        }
        else if(Number(media >= 3 && media <= 7 )){
            resposta.innerHTML= `Média = ${media}, exame`
        }
        else{
            resposta.innerHTML = `Média ${media}, aprovado`
        }
    }
}