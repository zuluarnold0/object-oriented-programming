/**Object literals is a simple javascript object with properties and methods */

const user = {
  /** properties */
  id: 1,
  name: 'star',
  surname: 'arnold',
  /** methods */
  getFullName: function () {
    return this.name + ' ' + this.surname
  },
}

// console.log('id: ', user.id)
// console.log('name: ', user.name)
// console.log('surname: ', user.surname)
console.log('Full Name: ', user.getFullName())
