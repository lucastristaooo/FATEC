function calcular(){
    var resposta = document.getElementById("resposta")
    var par = 0
    var impar = 0
    var numerop = []
    var numeroi = []
    var acumula = []
    for(var i = 0; i <= 5; i++){
        acumula[i] = prompt(`Digite o ${i+1}º número: `)
        if(acumula[i] % 2 == 0){
            numerop.push(acumula[i])
            par += 1
        }
        else{
            impar += 1
            numeroi.push(acumula[i])
        }
    }
    resposta.innerHTML += `Quantidade de números pares = ${par} <br>`
    resposta.innerHTML += `Números pares ${numerop} = <br>`
    resposta.innerHTML += `Quantidade de números ímpares = ${impar} <br>`
    resposta.innerHTML += `Números ímpares ${numeroi} = <br>`
}