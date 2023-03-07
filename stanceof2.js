// Literal
const nome = "Deyvison"
// Função construtora
const nomeMeio = String("Nogueira")
// Instanciação
const sobreNome = new String("Oliveira")

console.log(nome instanceof String) // false 
console.log(nomeMeio instanceof String) // false 
console.log(sobreNome instanceof String)// true

console.log(nome.constructor == String);
console.log(nomeMeio.constructor == String);
console.log(sobreNome.constructor == String);