function findPrimes() {
    // Получаем ввод пользователя
    let number = document.getElementById("number").value;

    // Создаем массив чисел от 2 до введенного пользователем числа
    let numbers = [];
    for (let i = 2; i <= number; i++) {
        numbers.push(i);
    }

    // Реализуем алгоритм решета Эратосфена
    for (let i = 0; i < numbers.length; i++) {
        // Если число не равно 0, то оно простое и мы удаляем из массива все его кратные числа
        if (numbers[i] !== 0) {
            for (let j = i + 1; j < numbers.length; j++) {
                if (numbers[j] % numbers[i] === 0) {
                    numbers[j] = 0;
                }
            }
        }
    }

    // Формируем массив простых чисел
    let primes = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== 0) {
            primes.push(numbers[i]);
        }
    }

    // Выводим результат
    let result = document.getElementById("result");
    result.textContent = "Простые числа от 2 до " + number + ": " + primes.join(", ");
}