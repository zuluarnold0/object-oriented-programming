/** factory method is simple javascript function*/

const createUser = (id, name, surname) => {
  const user = {
    /** properties */
    id,
    name,
    surname,
    /** methods */
    getFullName: function () {
      return this.name + ' ' + this.surname
    },
  }
  return user
}

const user = createUser(1, 'star', 'arnold')
console.log(user.getFullName())

const user2 = createUser(2, 'skott', 'mcmillan')
console.log(user2.getFullName())
