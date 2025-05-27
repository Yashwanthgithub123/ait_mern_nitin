numbers = [29, 7, 3, 2, 11, 19, 23, 5, 17, 19, 13]
console.log('Input Numbers = ', numbers)

numbers_plus_five = numbers.map( (number) => 
    {
        return number + 5
    }
)

console.log(numbers_plus_five)