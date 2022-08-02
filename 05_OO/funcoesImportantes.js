const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))  //Retorna um vetor com o objeto
Object.entries(pessoa).forEach(elemento => {
    console.log(`${elemento[0]}: ${elemento[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => { // Destructuring os elementos de um array
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {  //Define uma propriedade para o objeto
    enumerable: true, // Pode conter números
    writable: false, // Pode ser sobrescrita
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


// Object.assign (ECMAScript 2015)
const destino = { a: 1}
const o1 = { b: 2 }
const o2 = { c: 3, a: 4}
const obj = Object.assign(destino, o1, o2) // Pega os atributos dos objetos e junta/sobrescreve sob com o primeiro objeto mencionado 

Object.freeze(obj)
obj.c = 1234
console.log(obj)