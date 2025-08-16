let timepromise = new Promise((resolve,reject)=>{
let time= 9;
let currenthour = new date().gethours()

if(time=== currenthour){
    resolve("Your time matches my current local time");
} else{
    reject("Your time does not match to my current local time");
}
});

timepromise
    .then(result=> console.log(result))
    .catch(error=> console.log(error))