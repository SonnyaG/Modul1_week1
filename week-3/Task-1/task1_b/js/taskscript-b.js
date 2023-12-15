function calculateEntropy() {
    const inputString = document.getElementById('inputString').value;
    const entropy = calculateShannonEntropy(inputString);
    document.getElementById('result').innerText = "Результат расчета энтропии по Шеннону: " +entropy.toFixed(2);
  }
  
  function calculateShannonEntropy(str) {
    let frequencies = {};
    for (let i = 0; i < str.length; i++) {
      let char = str.charAt(i);
      if (frequencies[char]) {
        frequencies[char]++;
      } else {
        frequencies[char] = 1;
      }
    }
  
    let entropy = 0;
    for (let key in frequencies) {
      let frequency = frequencies[key] / str.length;
      entropy -= frequency * (Math.log(frequency) / Math.log(2));
    }
  
    return entropy;
  }