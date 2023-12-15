function countOccurrences() {
    const mainString = document.getElementById('mainString').value;
    const subString = document.getElementById('subString').value;

    // Подсчет вхождений subString в mainString
    const regex = new RegExp(subString, 'g');
    const occurrences = (mainString.match(regex) || []).length;

    document.getElementById('result').innerText = "Строка"+ " " +subString+ " встречается "+occurrences+" раз в главной строке.";
  }