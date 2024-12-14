// Write a function that print the numbers of a range. And write if It is FizzBuzz, Fizz or Buzz

const FizzBuzz = () => {
    for (let i = 0; i < 100;) console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i)
}

FizzBuzz()


