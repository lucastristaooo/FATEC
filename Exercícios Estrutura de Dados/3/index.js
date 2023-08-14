function iniciar(){
    let contadorn = 0
    let contadorp = 0
    let somadorp = 0 
    let somadori = 0  
    let posição = 0
    let somadorii = []
    var vetor = []
    var quantidade = prompt("Digite a quantidade de números dentro do vetor: ")
    for(var i=0; i < quantidade; i++){
        vetor.push(prompt("Digite o valor: "))
    }
    do{
        var x = prompt("Digite a opção desejada: 1.Encontrar a quantidade de números negativos 2.Calcular a média de números pares 3.Calcular a soma dos múltiplos de 3 e 5 4.Listar todos os números ímpares 5.Mostrar o menor elemento 6.Mostrar a posição do maior elemento 7.Verificar se o vetor possui números repetidos 8.Remover os números repetidos 9.Sair ")
        if(x == 1){
            for(var i=0; i <= vetor.length; i++){
                if(vetor[i] < 0){
                    contadorn += 1
                }
            }
            alert(contadorn)
        }
        else if(x == 2){
            for(var i=0; i <= vetor.length; i++){
                if(vetor[i] > 0 && vetor[i] % 2 == 0){
                    somadorp += Number(vetor[i])
                    contadorp += Number(1)
                }
                var respostap = Number(somadorp) / Number(contadorp)
            }
            alert(respostap)
        }
        else if(x == 3){
            for(var i = 0; i <= vetor.length; i++){
                if(vetor[i] % 3 == 0 && vetor[i] % 5 == 0){
                    somadori += vetor[i]
                }
            }
            alert(somadori)
        }
        else if(x == 4){
            for(var i = 0; i <= vetor.length; i++){
                if(vetor[i] % 2 != 0){
                    somadorii.push(vetor[i])
                }
            }
            alert(somadorii)
        }
        else if(x == 5){
            let menor = vetor[0]
            for(var i = 0; i <= vetor.length; i++){
                if(vetor[i] < menor){
                    menor = vetor[i]
                }
            }
            alert(menor)
        }
        else if(x == 6){
            let maior = 0
            for(var i = 0; i <= vetor.length; i++){
                if(vetor[i] > maior){
                    maior = vetor[i]
                    posição += 1
                }
            }
            alert(posição)
        }
        else if(x == 7){
            for(var i = 0; i <= vetor.length; i++){
                for(var j = 0; j <= vetor.length; j++){
                    if(vetor[i] == vetor[j]){
                        alert("Existe números repetidos")
                    }
                }
            }
        }
        else if(x == 8){
            for(var i = 0; i <= vetor.length; i++){
                for(var j = 0; j <= vetor.length; j++){
                    if(vetor[i] == vetor[j]){
                        vetor[i].dell()
                    }
                }
            }
        }
    }while(x != 9)
}