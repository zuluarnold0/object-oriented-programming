/**primitives copies by value */
let age1 = 5

function increaseAge1(age1) {
  age1++
}

increaseAge1(age1)
console.log('Age1: ', age1) //Age1: 5

/**objects copies by reference */
let ageTwo = { value: 5 }

function increaseAgeTwo(ageTwo) {
  ageTwo.value++
}

increaseAgeTwo(ageTwo)
console.log('AgeTwo: ', ageTwo) //AgeTwo: 6
