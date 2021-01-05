// parametre geç bill diye 
// bill kontrolü bill <50 percent hesabı 0.2

//tipCalculator 
//bill<50 0.2
// bill>= 50 ve bill <200 0.15
// percent*billfonksiyon bas

function tipCalculator(bill){
    if (bill < 50){
        return 0.2 * bill;
    }else if(bill >= 50 && bill < 200){
        return 0.15 * bill;
    }else{
        return 0.1 * bill;
    }
};

console.log(tipCalculator(45));
console.log(tipCalculator(150));
console.log(tipCalculator(300));
