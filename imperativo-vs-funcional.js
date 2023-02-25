//vetor com 5 elementos
const vetor = [1,2,3,4,5];

let quadrado = [];

for(let i = 0; i < vetor.length; i++){
    const quad = vetor[i] * vetor[i];
    quadrado.push(quad);
}

console.log(vetor);
console.log(quadrado);


// vetor é um objeto do tipo Array
quadrado2 = vetor.map((n) => n * n);

console.log(vetor);
console.log(quadrado2);