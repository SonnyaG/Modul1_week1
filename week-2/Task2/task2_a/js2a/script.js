function findSquareRoot() {
    let number = document.getElementById("number").value;
    let guess = number / 2;
    let epsilon = 0.0001;
    if (number < 0) {
        result.innerHTML = "Гений, ты же знаешь, что нельзя найти квадратный корень у отрицательного числа?"
        return;
    } else {
        while (Math.abs(guess * guess - number) > epsilon) {
            guess = (guess + number / guess) / 2;
        }
    }

    document.getElementById("result").innerHTML = "Квадратный корень числа " + number + " равен " + guess.toFixed(4);
}

