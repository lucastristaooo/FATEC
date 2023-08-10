function calcular(){
    var resposta = document.getElementById("resposta")
    var nomes = []
    var notas = []
    var recuperação = []
    var maior = 0
    var menor = 0
    var precisa = []
    for(var i = 0; i<=6; i++){
        nomes[i] = prompt(`Digite o nome do aluno número ${i+1}º`)
        notas[i] = prompt(`Digite a nota do aluno número ${i+1}º`)
    }
    for(var i = 0; i<=7; i++){
        if(notas[i] > maior){
            maior = notas[i]
            maiornome = nomes[i]
        }
        if(notas[i] < 7){
            recuperação.push(notas[i])
            precisa.push(5 - notas[i])
        }
    }
    resposta.innerHTML = `A maior nota foi ${maior} tirada pelo aluno ${maiornome} <br>`
    resposta.innerHTML += `Os alunos de recuperação tiraram notas ${recuperação} e precisam tirar pelo menos ${precisa} em respectiva ordem`
}

