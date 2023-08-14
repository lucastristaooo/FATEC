function iniciar(){
    var x = prompt("Digite o número de elementos fibonacci desejados: ")
    var resposta = [1]
    var t1 = 0
    var t2 = 1
    var i = 2
    for(i; i <= x; i++){
        var t3 = t1 + t2
        resposta.push(t3)
        t1 = t2
        t2 = t3
    }
    alert(resposta)
}