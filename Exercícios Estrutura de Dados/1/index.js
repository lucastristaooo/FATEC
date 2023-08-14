function iniciar(){
    var vetor = []
    let somai = 0
    let somap = 0
    let somatudo = 0
    var tamanho = 0
    do{
        var x = prompt("1.Inserir elementos 2.Remover elementos 3.Somar elementos 4.Somar valores entre")
        if(x == 1){
            tamanho = prompt("Quantos valores serão adicionados?")
            if(vetor.length + tamanho <= 50){
                for(i = 0; i < tamanho; i++){
                    vetor.push(prompt("Digite os valores: "))
                }
                alert("Valores adicionados com sucesso")
            }
            else{
                alert("Valores máximos atingidos")
                break
            }
        }
        if(x == 2){
            vetor.splice(vetor.indexOf(prompt("Digite o número que deseja remover: ", 1)));
            alert("Valores removidos com sucesso")
        }
        if(x == 3){
            var opt = prompt("Deseja somar os elementos ímpares (1) ou pares (2)?")
            if(opt == 2){
                for(var i = 0; i <= vetor.length; i++){
                    if(vetor[i] % 2 == 0){
                        somap += Number((vetor[i]))
                    }
                }
                alert(somap)
            }
            else if(opt == 1){
                for(var i = 0; i <= vetor.length; i++){
                    if(vetor[i] % 2 == 1){
                        somai += Number((vetor[i]))
                    }
                }
                alert(somai)
            } 
        }
        if(x == 4){
            var i = prompt("Digite o primeiro valor: ")
            var z = prompt("Digite o segundo valor: ")
            for(i; i <= z; i++){
                somatudo += Number(vetor[i])
            }
            alert(somatudo)
        }
    }while(x != 5)
    alert(vetor)
}