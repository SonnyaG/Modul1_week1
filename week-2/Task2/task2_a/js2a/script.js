function findSquareRoot() {
    let number = document.getElementById("number").value;
    let guess = number / 2;
    let epsilon = 0.0001;

    while (Math.abs(guess * guess - number) > epsilon) {
        guess = (guess + number / guess) / 2;
    }

    document.getElementById("result").innerHTML = "Квадратный корень числа " + number + " равен " + guess.toFixed(4);
}

