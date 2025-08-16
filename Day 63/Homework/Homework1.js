const avregsum = (numbersarry) => {
    let total =0;
    for(let i =0; i < numbersarry.length;i++){
        total += numbersarry[i]
    }
    return total / numbersarry.length;
}
console.log(avregsum([1,2,3]))


