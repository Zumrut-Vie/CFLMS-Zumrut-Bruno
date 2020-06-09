function result(name, age, car , country) {
     var austria = Math.round(car * 100 / age + 50);// 
     var hungary = Math.round(car * 120 / age + 100);
     var greece = Math.round(car * 150 / (age + 3) + 50);
     var resultat = [austria, hungary, greece];
     if (country == "Austria") {
        console.log(austria)
         return  name + ", your insurance will cost " + resultat[0].toFixed(2) + " €";
     } else if (country == "Hungary") {
         return  name + ", your insurance will cost " + resultat[1] + " €";
     } else {
         return  name + ", your insurance will cost " + resultat[2] + " €";
     }
 }