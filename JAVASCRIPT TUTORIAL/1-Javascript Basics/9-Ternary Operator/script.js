var firstName = "John";
var age = 25;

age >= 18 
 ? console.log(firstName + " Ehliyet alabilir.") 
 : console.log(firstName + " Ehliyet alma yaşını tutmuyor.");

 var drink = age >= 18 ? "Kola" : "Ayran";
 console.log(drink);

 //var job ="teacher";
 //var job ="designer";
 var job ="engineer";



 switch(job) {
     case "teacher":
     case "instructur":
        console.log(firstName + " teacher kids how to code.");
        break;
    case "driver":
        console.log(firstName + " drives an uber is Lisbon.");
        break;
    case "designer":
        console.log(firstName + " design beautiful websites.");
        break;
    default:
        console.log(firstName + " does something else.");
        
 }

 age = 56;
 switch(true){
     case age < 13:
         console.log(firstName + " is a boy.");
         break;
     case age >=13 && age <20:
         console.log(firstName + " is a teenager.");
         break;
     case age >=20 && age <30:
         console.log(firstName + " is a young man.");
         break;
    default:
        console.log(firstName + " is a man.");
}
