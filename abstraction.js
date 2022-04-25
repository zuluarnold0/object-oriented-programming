/**constructor function is javascript function:
 * with a capitalized name
 * assigns properties and methods using 'this' keyword
 * uses 'new' keyword to instantiate a function
 */

function User(id) {
  this.id = id
  let name = 'user' //is a local varible: not accessed outside
  let surname = 'admin' //is a local varible: not accessed outside
  let fullName = name + ' ' + surname //is a local varible: not accessed outside
  this.getFullName = function () {
    return this.id + '. ' + fullName
  }
}

const createdUser = new User(42)
console.log('User  --> ', createdUser.getFullName())
