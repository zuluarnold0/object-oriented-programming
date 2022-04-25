class Person {
  constructor(id, name, surname) {
    this.id = id
    this.name = name
    this.surname = surname
  }
  getFullName() {
    return this.name + ' ' + this.surname
  }
}

class Student extends Person {
  constructor(id, name, surname) {
    super(id, name, surname)
  }
  getCapitalizedName() {
    return this.getFullName().toUpperCase()
  }
}

const student = new Student(19, 'star', ' starner')
console.log('Student --> ', student.getCapitalizedName())
