function calcular(){
    var resposta = document.getElementById("resposta")
    resposta.innerHTML = " "
    var idade = 0
    var altura = 0
    var media = 0
    var cont = 0
    do{
        idade = Number(prompt("Digite a idade"))
        altura = Number(prompt("Digite a altura"))
        if(idade > 50){
            media += altura
        }
        cont += 1
    }while(idade > 0 )
    resposta.innerHTML = `Média ${media / cont}`
}