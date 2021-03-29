const button = document.getElementById('btn_submit')
const year = document.getElementById('year');
const result = document.getElementById('result')

button.addEventListener('click', function(){
    result.innerHTML = leap_year(year.value);
    console.log(typeof(year.value));
});

function leap_year(s){
    let result_value= "";
    let year_number = parseInt(s);
    if((year_number % 4 == 0) && (year_number % 100 != 0) && (year_number % 400) == 0){
        return result = `${year_number} Its a leap year!`;
    }

    return result_value = `${year_number} Its a leap year!`;
}