function promise(){
    return new promise((resolve) =>{
        setTimeout(()=>{
            resolve("Hello! Promise resolved after 5 seconds");
        }, 5000);
    });
}

delayedPromise()
.then(message=> console.log(message));