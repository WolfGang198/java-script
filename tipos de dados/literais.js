const nome = "WolfGang";
const altura = 1.7;
const filhos = 0;
const efetivo = true;
//
const idade = function(){
    const hoje = new Date()
    const nascimento = new Date(2001, 10, 30)
    return (hoje - nascimento)
}

console.log(idade());
//
const hobbies = ["bike","corrida","airsoft"];//Array
//JSON
const WolfGang = {
    nomeA: nome,
    alturaA: altura,
    folhos: filhos,
    efetivo: efetivo,
    idade: idade,
    hobbies: hobbies,
    resume: function(){
        console.log(`Nome: ${nome}`)
    }
}

console.log(WolfGang.nomeA);
WolfGang.resume();
console.log(typeof WolfGang);