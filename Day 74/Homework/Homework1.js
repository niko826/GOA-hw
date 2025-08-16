let numbers = new Promise((reslove,reject) => {
let num = 9;

if(num % 2 === 0){
    reslove("The Number is even");
} else{
    reject("The Number is odd");
}
});

numbers
.then(result => console.log(result))
.catch(error => console.log(error));
