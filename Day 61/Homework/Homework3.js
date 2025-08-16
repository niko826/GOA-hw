const fruits = ['apple', 'cherry', 'strawberry', 'apple', 'orange'];

let fruitcounter = 0;

for(i = 0;  i < fruits.length; i++){
    if(fruits[i] === `apple`){
        fruitcounter += 1
    }
}
console.log(fruitcounter)

