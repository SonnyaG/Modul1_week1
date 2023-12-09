function sort() {
    var input = document.getElementById("input").value;
    var numbers = input.split(",");

    for (var i = 0; i < numbers.length; i++) {
      numbers[i] = parseInt(numbers[i]);
    }

    var sortedNumbers = mergeSort(numbers);

    // Выводим результат в тег 
    document.getElementById("result").innerHTML = "Отсортированный массив: " + sortedNumbers.join(", ");
  }

  // Функция сортировки MergeSort
  function mergeSort(arr) {
    // Если массив содержит только один элемент, возвращаем его
    if (arr.length < 2) {
      return arr;
    }

    // Находим середину массива
    var middle = Math.floor(arr.length / 2);

    // Разбиваем массив на два подмассива
    var left = arr.slice(0, middle);
    var right = arr.slice(middle);

    // Рекурсивно вызываем функцию mergeSort для каждого подмассива
    left = mergeSort(left);
    right = mergeSort(right);

    // Объединяем отсортированные подмассивы в один отсортированный массив
    return merge(left, right);
  }

  // Функция объединения двух отсортированных массивов в один отсортированный
  function merge(left, right) {
    var result = [];

    // Пока оба массива не пусты, сравниваем первые элементы и добавляем меньший в результирующий массив
    while (left.length, right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      }else {
        result.push(right.shift());
      }
    }

    // Добавляем оставшиеся элементы из левого или правого массива в результирующий
    while (left.length) {
      result.push(left.shift());
    }
    while (right.length) {
      result.push(right.shift());
    }

    return result;
  }