function calculateAge() {
    let age = document.getElementById("age").value;
    let result = document.getElementById("result");
 
    if (age % 10 == 1 && age != 11) {
     result.innerHTML = "Вам"+ " " + age + " " +"год";
    } else if (age % 10 >= 2 && age % 10 <= 4 && (age < 10 || age > 20)) {
     result.innerHTML = "Вам"+ " " + age + " " +"года";
    } else {
     result.innerHTML = "Вам" + " " + age + " " + "лет";
    }
   }