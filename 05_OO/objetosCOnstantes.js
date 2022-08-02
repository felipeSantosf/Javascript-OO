// pessoa -> End. memória (123) -> {...}

const pessoa = {nome: 'João'}
pessoa.nome - 'Pedro'
console.log(pessoa)


//pessoa -> End. memória (456) -> {...}
//pessoa = {nome : 'Ana'} // Vai dar errado pq estou atribuindo um novo obj

Object.freeze(pessoa) // Congela o objeto

pessoa.nome = 'Maria'
pessoa.endereco = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)