function soma(x, y){
    return x + y;
}

let sub = function (x, y){
    return x - y;
}

function imprimir(operacao, x, y){
    const r = operacao(x, y);
    console.log(r);
}

imprimir(soma, 10, 10);
imprimir(sub, 10, 8);