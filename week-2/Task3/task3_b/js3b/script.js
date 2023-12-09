function findMedian() {
    // Получаем ввод пользователя
    let numbers = document.getElementById("numbers").value;

    // Преобразуем строку в массив чисел
    numbers = numbers.split(",").map(Number);

    // Сортируем массив по возрастанию
    numbers.sort(function(a, b) {
        return a - b;
    });

    // Находим индекс серединного элемента
    let middleIndex = Math.floor(numbers.length / 2);

    // Если количество элементов нечетное, то медиана - это значение серединного элемента
    if (numbers.length % 2 !== 0) {
        document.getElementById("result").innerHTML = "Медиана: " + numbers[middleIndex];
    // Если количество элементов четное, то медиана - это среднее арифметическое двух соседних элементов
    }else  {
        let median = (numbers[middleIndex] + numbers[middleIndex - 1]) / 2;
        document.getElementById("result").innerHTML = "Медиана: " + median;
    }
}