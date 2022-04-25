/**constructor class is javascript class:
 * with a capitalized name
 * uses a constructor method to initialize properties
 * assigns properties and methods using 'this' keyword
 * uses 'new' keyword to instantiate a class
 */

class UserClass {
  constructor(id, name, surname) {
    this.id = id
    this.name = name
    this.surname = surname
  }
  getFullName() {
    return this.name + ' ' + this.surname
  }
}

const createdUserClass = new UserClass(19, 'star', 'starborn starner')
console.log('User Class --> ', createdUserClass.getFullName())
