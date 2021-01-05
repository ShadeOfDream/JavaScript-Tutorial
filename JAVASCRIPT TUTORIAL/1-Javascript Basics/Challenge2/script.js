var BasketballTeam1;
var BasketballTeam2;

var teampoint1_1 =100, teampoint1_2 =96, teampoint1_3 =107;
var teampoint2_1 =95, teampoint2_2 =102, teampoint2_3 =96;
pointTeam1 =  (teampoint1_1 + teampoint1_2+ teampoint1_3)/ 3;
pointTeam2 = (teampoint2_1 + teampoint2_2+ teampoint2_3)/ 3;

if(pointTeam1 > pointTeam2){
    console.log("Basketball Team 1 is win!");
}else{
    console.log("Basketball Team 2 is win!");
}

//iki değişken basket takımı 
//3 set maç s puan 3 maç ortalama her takım bir değişkene aktar yazdır if şuntakım puanı büyükse yazdır else