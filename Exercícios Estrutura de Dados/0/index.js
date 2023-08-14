function iniciar(){
    let resposta = document.getElementById("resposta")
    let vetor = []
    let vetor1 = []
    let vetor2 = []
    var x = prompt("Digite o número de elementos no primeiro vetores: ")
    for(var i = 0; i<x; i++){
        vetor1.push(prompt("Digite os elementos do primeiro vetor: "))
    }
    var y = prompt("Digite o número de elementos no segundo vetores: ")
    for(var i = 0; i<y; i++){
        vetor2.push(prompt("Digite os elementos do segundo vetor: "))
    }
    if(vetor1.length > vetor2.length){
        for(var i = 0; i<x; i++){
            vetor.push(vetor1[i])
            vetor.push(vetor2[i])
        }
    }
    else if(vetor2.length > vetor1.length){
        for(var i = 0; i<y; i++){
            vetor.push(vetor1[i])
            vetor.push(vetor2[i])
        }
    }
    resposta.innerHTML = `Vetor com valores alternados ${vetor}`
}