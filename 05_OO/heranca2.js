// Cadeia de protótipos (prototype chain)
 Object.prototype.atributo0 = '0' // Não faça isso em casa!
 const avo = { atributo1: 'A'}
 const pai = { __proto__: avo, atributo2: 'B', atributo3: '3'}
 const filho = { __proto__: pai, atributo3: 'C'}
 console.log(filho.atributo0, filho.atributo1, filho.atributo2, filho.atributo3)


 const carro = {
     velAtual: 0,
     velMax: 200,
     acelerar(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
     }, 
     status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
     }
 } 


 const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing 
 }

 const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
 }

 Object.setPrototypeOf(ferrari, carro)
 Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerar(100)
console.log(volvo.status())

ferrari.acelerar(40)
console.log(ferrari.status())
