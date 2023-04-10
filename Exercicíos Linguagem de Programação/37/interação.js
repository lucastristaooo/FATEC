function calcular(){
    var resposta = document.getElementById("resposta")
    var m1 = []
    var m2 = []
    var resposta1 = []
    for(var i = 0; i <= 2; i++){
        m1[i] = prompt("Digite um número de matrícula dos alunos que cursam Lógica de Programação")
    }
    for(var i = 0; i <= 2; i++){
        m2[i] = prompt("Digite o número de matrícula dos alunos que cursam Linguagem de Programação")
    }
    for(var i = 0; i<= 2; i++){
        if(m1[i] == m2[i]){
            resposta1.push(i)
        }
    }
    resposta.innerHTML = `Os alunos nas posições ${resposta1} estão matriculados em ambas as matérias`
}