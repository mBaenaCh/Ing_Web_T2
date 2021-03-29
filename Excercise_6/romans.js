const button = document.getElementById('btn_submit');
const number = document.getElementById('number');
const result = document.getElementById('result');

const romans = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
};

button.addEventListener('click', function (){
    result.innerHTML = toRomanNumber(number.value);
});

function toRomanNumber(s){
    let roman = "";
    let keys = Object.keys(romans);
    keys.forEach(number => {
        while(s >= romans[number]){
            roman += number;
            s -= romans[number];
        }
    });
    return roman;
}