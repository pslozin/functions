// Starting array
//let array = [28, 12, -12, 30, 2, 0, 12]
let array = [1, 4, 11, 2, 37, -4]
//let array = [0, 1, 2, 3, 4, 5]
// Write your solution below:

let x = 0// Temp val
let y = 0

let result = false

for(i=0;i<array.length;i++)
{
    y = y + 1

for(x;x<array.length;x++)
{
    
    if (array[y] + array[x] === 0){

        result = true
    
    }
}


}
console.log(result)