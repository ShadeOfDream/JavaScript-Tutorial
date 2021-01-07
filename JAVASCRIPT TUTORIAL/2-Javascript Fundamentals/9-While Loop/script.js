for(let rep = 1; rep <=10; rep++) { //şart sağlanana kadar
    console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;
while(rep <=10){ //şart sağlandıkça
    console.log(`Lifting weights repetition ${rep}`);
    rep++;//bunu yazmazsan sonsuz döngüye giriyor :)
}

let dice = Math.trunc(Math.random() * 6) +1;
console.log(dice);

while(dice !== 6){
    console.log(`You rolled ${dice}`);
    dice = Math.trunc(Math.random() * 6) +1;
    if(dice ===6){
        console.log("Loop is about to end...")
    }
}