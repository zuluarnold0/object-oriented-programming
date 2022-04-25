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
// console.log('Full Name: ', user.getFullName())

/** Adding properties */
user.age = 3 //or user['age'] = 3
// console.log(user)

/** Deleting properties */
delete user.surname // or delete user['surname']
// console.log(user)
