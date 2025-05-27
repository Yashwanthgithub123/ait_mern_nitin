numbers = [29, 7, 3, 2, 11, 19, 23, 5, 17, 19, 13]
console.log('Input Numbers = ', numbers)

sum = numbers.reduce( (sum_of_numbers, number) => 
    {
        return sum_of_numbers + number
    }
, 0)

console.log('Sum = ', sum)