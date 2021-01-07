
//reviewing functions 17 ile başladık
//function anatomy


//keyword,  function name, parameters: local variable of a function bu parantezin içini ilgilendirir
function calcAge(birthYear,firstName){
    
    //function body : fonksiyonun ne için çalışacağını bu bölüm belirler.
    // "     "      : Processes function input data
    
    
    const age = 2037 - birthYear;

    
    
    
    console.log(`${firstName} is ${age} years old.`);

    
    
    
    return age; //return statement to output value from the function and terminate function
    

}

const age = calcAge(1991,"Zeki"); // fonksiyon çağırma calling/running function