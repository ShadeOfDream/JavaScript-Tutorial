function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor (apples,oranges){
 const applePieces = cutFruitPieces(apples);
 const orangePieces = cutFruitPieces(oranges);

 const juice = `juice with ${applePieces} piece of apple and  ${orangePieces} piece of orange.`;
 return juice;
}
console.log(fruitProcessor(2,3));
