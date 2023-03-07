const nome = "WolfGang";

String.prototype.meRetorne = function(){
    return this;
}

const quemEhVC = nome.meRetorne();

console.log(nome.toUpperCase());
console.log(nome);
console.log(typeof nome);
console.log(typeof quemEhVC);
