//Padrão
function mult(v1, v2){
    return v1 * v2;
}

// Function expression
const soma = function(v1, v2){
    return v1 + v2;
}

//Arrow function
const sub = (v1, v2) => {
    return v1 - v2;
}
console.log(mult(2,3))
console.log(soma(2,3))
console.log(sub(2,2))