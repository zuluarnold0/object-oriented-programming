/**primitives copies by value */
let age1 = 5

function increaseAge1(age1) {
  age1++
}

increaseAge1(age1)
console.log('Age1: ', age1)

/**objects copies by reference */
let ageTwo = { value: 10 }

function increaseAgeTwo(ageTwo) {
  ageTwo.value++
}

increaseAgeTwo(ageTwo)
console.log('AgeTwo: ', ageTwo)
