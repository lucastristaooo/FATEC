function calcular(){
    var resposta = document.getElementById("resposta")
    var numerop = []
    var numeroi = []
    var acumula = []
    var outra = []
    for(var i = 0; i <= 6; i++){
        acumula[i] = prompt(`Digite o ${i+1}º número: `)
        if(acumula[i] % 2 == 0){
            numerop.push(acumula[i])
        }
        else if(acumula[i] % 3 == 0){
            numeroi.push(acumula[i])
        }
        else if(acumula[i] % 2 == 0 & acumula[i] % 3 ==0){
            outra.push(acumula[i])
        }
    }
    resposta.innerHTML += `Números pares = ${numerop}<br>`
    resposta.innerHTML += `Números ímpares = ${numeroi}<br>`
    resposta.innerHTML += `Número diviseis por 2 e 3 = ${outra}`
}