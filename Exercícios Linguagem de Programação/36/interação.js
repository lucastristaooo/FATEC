function calcular(){
    var resposta = document.getElementById("resposta")
    var números = []
    var cont = 0
    var resposta1 = []
    for(var i = 0; i <= 15; i++){
        números[i] = prompt("Digite um número")
    }
    for(var i = 0; i<= 15; i++){
        if(números[i] == 30){
            cont += 1
            resposta1.push(i)
        }
    }
    resposta.innerHTML = `O número 30 aparece ${cont} vezes, nas posições ${resposta1}`
}