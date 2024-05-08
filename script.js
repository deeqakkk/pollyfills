
//  PROBLEM 1
const animals = [
  { type: 'lion', name: 'king' },
  { type: 'bear', name: 'hello' }
]

function printAnimals(i) {
  this.print = function () {
    console.log("#"+i+" "+ this.type + ": "+ this.name)
  }
  this.print()
}

for (let i = 0; i < animals.length; i++){
  printAnimals.call(animals[i], i)
}

// PROBLEM 2
const array = [
  "a","b"
]
const elements = [
  0,1,2
]

array.map(item => elements.push(item))

console.log(elements)

// PROBLEM 3 : Find Max
const numbers = [99,1, 2, 3, 4, 5]

console.log(Math.max.apply(null, numbers))


// Polyfill for call Method
let car1 = {
  color: 'blue',
  company: 'BMW'
}


function purchaseCar(currency, price) {
  console.log(
    ` I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
  )
}

purchaseCar.call(car1,'$', 500000 )


Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error(this + "it's not a callable function")
  }
  
  context.fn = this;
  context.fn(...args)
}

purchaseCar.myCall(car1, '$', 500000)

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== 'function') {
    throw new Error (this +" it's not a callable function" )
  }

  if (!Array.isArray(args)) {
    throw new TypeError("apply methods expects arguments in an array")
  }
  context.fn = this;
  context.fn(...args)

}

purchaseCar.myApply(car1, ['$', '50k'])

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error(this +
      " it's not callable"
    )
  }

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs)
  }
}

const customBind = purchaseCar.bind(car1, '$', '55K')
console.log(customBind())


