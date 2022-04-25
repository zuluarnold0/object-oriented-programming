/**constructor function is javascript function:
 * with a capitalized name
 * assigns properties and methods using 'this' keyword
 * uses 'new' keyword to instantiate a function
 */

function UserFunction(id, name, surname) {
  this.id = id
  this.name = name
  this.surname = surname
  this.getFullName = function () {
    return this.name + ' ' + this.surname
  }
}

const createdUserFunction = new UserFunction(42, 'skott', 'starnner')
console.log('User Function --> ', createdUserFunction.getFullName())
