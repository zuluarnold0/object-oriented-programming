/**Object literals is a simple javascript object with properties and methods */

const user = {
  /** PROPERTIES */
  id: 1,
  name: 'star',
  surname: 'arnold',
  /** METHODS */
  getFullName: function () {
    return this.name + ' ' + this.surname
  },
}

// console.log('id: ', user.id)
// console.log('name: ', user.name)
// console.log('surname: ', user.surname)
// console.log('Full Name: ', user.getFullName())

/** ADDING PROPERTIES */
user.age = 3 //or user['age'] = 3
// console.log(user)

/** DELETING PROPERTIES */
delete user.surname // or delete user['surname']
// console.log(user)

/** LOOPING THOUGH OBJECTS: ENUMERATION */
for (item in user) {
  /** PRINTING KEYS */
  // console.log(item)
  /** PRINTING VALUES */
  // console.log(user[item])
}

/** FINDING KEYS USING A METHOD */
const keys = Object.keys(user)
// console.log(keys)

/** GETTING PROPERTIES WITH A PARTICULAR TYPE */
for (item in user) {
  if (typeof user[item] === 'number') {
    // console.log(item)
  }
}

/** CHECKING IF A PROPERTY IS IN AN OBJECT */
if ('age' in user) {
  console.log('found age')
}
