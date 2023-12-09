function countMaxNumbers() {
    // Получаем ввод пользователя
    let numbers = document.getElementById("numbers").value;

    // Преобразуем строку в массив чисел
    numbers = numbers.split(",").map(Number);

    // Находим максимальное число в массиве
    let maxNumber = Math.max(...numbers);

    // Считаем количество чисел, равных максимальному
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === maxNumber) {
            count++;
        }
    }

    // Выводим результат на страницу
    document.getElementById("result").innerHTML = "Количество чисел, равных максимальному: " + count;
}