// JSON é formato de dados (textual e genérico), n tem função 
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + C }}
console.log(JSON.stringify(obj))

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))
