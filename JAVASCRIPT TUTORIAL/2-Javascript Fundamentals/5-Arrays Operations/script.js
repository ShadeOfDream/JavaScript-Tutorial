const friends = ["Sema", "Mustafa", "Asel"];

//Add Elements
const newLenght =friends.push("Jay");
console.log(friends);
console.log(newLenght);

friends.unshift("Deeplab"); //ilk elemanına ekleme unshift push son elemana ekler
console.log(friends);

//Remove Elements
friends.pop(); //pop, son elemeanı siler 
console.log(friends);

friends.shift();//shift ilk elemanı siler
console.log(friends);
console.log(friends.indexOf("Mustafa"));
console.log(friends.indexOf("Asel"));

console.log(friends.includes("Sema"));//includes , dizide var mı yok mu kontrol eder

if(friends.includes("Mustafa")){
    console.log("Evet bu isim dizide vardır...");
}