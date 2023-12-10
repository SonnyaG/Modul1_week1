function calculateDays() {
    let month = parseInt(document.getElementById("month").value);
    let days;
    if (month < 1 || month > 12 ) {
        document.getElementById("result").innerHTML = "Некорректный номер месяца";
        return;
    }
    else
        if (month === 2) {
        let year = new Date().getFullYear();
            if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
                days = 29;
            } else {
                days = 28;
            }
        } else if (month === 4 || month === 6 || month === 9 || month === 11) {
            days = 30;
        } else {
            days = 31;
        }

    document.getElementById("result").innerHTML = "Количество дней в месяце: " + days;
}

//check
