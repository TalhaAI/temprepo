const names = require('./4-names')
console.log(names)

const sayHi = (name) =>{
    console.log('Hello there', name)
}

module.exports = sayHi

sayHi(names.john)
