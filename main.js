function calcNumbers(result) {
    document.querySelector('.area').value += result;
}

function percentage(result) {
    var result1 = String(result);

    // kiem tra so sanh chuoi neu co tra ve true nguoc lai flase
    if(result1.includes("%")) {
        var a, b, percentage;
        var splitWord = [];

        a = Number(splitWord[0]);
        b = Number(splitWord[1]);

        percentage = (a / 100 * b);
        document.querySelector('.area').value = percen;
    }
}

function makeNegative(result) {
    if(result.charAt(0) == '_') {
        document.querySelector('.area').value = result.replace('-', '')
    }
    else {
        document.querySelector('.area').value = '-' + result;
    }
}

const body = document.querySelector("body"),
modeToggle = document.querySelector('.drak-light');

modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");

    if(!body.classList.contains("dark")) {
        localStorage.setItem("mode", "light-mode");
    }
    else {
        localStorage.setItem("mode", "dark-mode");
    }
})