function test(x,y)
{
console.log(x + y)
}

let r = 8

//test('banana',5)
//test(r,8)


// let fruitArray = ['apple', 'banana','cherry']

// for(i = 0; i < fruitArray.length; i++)
// {
//     let fruit = fruitArray[i]

//     console.log(fruit)
// }

let nouns = ["Fox","Dog","Cheeta","Giraffe", "Cat"] // x
let adj = ["Big","Small","Sewwt","Lovely","Fat"]    // y
let verbs = ["eats","runs","swim","skips","hops"]   // z


const randomArray = (arr) => {

    let rndInt = Math.floor(Math.random() * arr.length)
    return arr[rndInt]



}
console.log(randomArray(nouns))

let madlib = 'The y x z  over y x'

while(madlib.includes('x') || madlib.includes('y') || madlib.includes('z'))

    madlib = madlib.replace('x',randomArray(nouns))
    
madlib = madlib.replaceAll('x', randomArray(nouns))
                .replaceAll('y', randomArray(adj))
                .replaceAll('z',randomArray(verbs))

                console.log(madlib)