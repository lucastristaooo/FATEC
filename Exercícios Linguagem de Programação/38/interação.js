function calcular(){
    var resposta = document.getElementById("resposta")
    numeros = []
    soma = 0
    soman = 0
    for(i = 0; i <= 10; i++){
        numeros[i] = prompt(`Digite o número nº ${i}`)
    }
    for(i = 0; i<= 10; i++){
        if(numeros[i] >= 0){
            soma += numeros[i]
        }
        else{
            soman += 1
        }
    }
    resposta.innerHTML = `Soma dos números positivos ${soma}`
    resposta.innerHTML = `Quantidade de números negativos ${soman}`
}