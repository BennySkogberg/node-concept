const _ = require('lodash')
const calc = require('./calc')

const numbersToAdd = [3, 4, 19, 2]

const result = calc.sum(numbersToAdd)
console.log(`The result is: ${result}`)

_.assign({'a': 1}, {'b': 2}, {'c': 3})
