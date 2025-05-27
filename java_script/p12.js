numbers = [29, 7, 3, 2, 11, 19, 23, 5, 17, 19, 13]
console.log('Input Numbers = ', numbers)

numbers_less_than_ten = numbers.filter( (number) => 
    {
        return number < 10
    }
)

console.log(numbers_less_than_ten)