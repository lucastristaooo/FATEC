function calcular(){
    var resposta = document.getElementById("resposta")
    var vetor1 = []
    var vetor2 = []
    var resultante1 = []
    var resultante2 = []
    var soma = []
    resp = 0
    for(var i = 0; i <= 9; i++){
        vetor1[i] = prompt(`Digite o ${i+1}º número`)
    }
    for(var i = 0; i <= 4; i++){
        vetor2[i] = prompt(`Digite o ${i+1}º número`)
        soma.push(vetor2[i])
    }
    for(var i = 0; i <= 9; i++){
        if(vetor1[i] % 2 == 0){
            resultante1.push(vetor1[i] += Number(soma.reduce((partialSum, a) => partialSum + a, 0)))
        } 
    }
    for(var i = 0; i <= 9; i++){
        if(vetor1[i] % 2 == 1){
            resp = vetor1[i]
            for(var i = 0; i <= 9; i++){
                if(resp % vetor2[i] == 0){
                    resultante2.push(vetor1[i])
                }
            }
        } 
    }
    resposta.innerHTML = `${resultante1}<br>`
    resposta.innerHTML += `${resultante2}`
}

