const button = document.getElementById('btn_submit');
const word = document.getElementById('pword');
const result = document.getElementById('result');
const alphabet = "abcdefghijklmnopqrstuvwxyz";

button.addEventListener('click' , function() {
    console.log(word.value);
    result.innerHTML = pangram(word.value);
 console.log(pangram(pangram(result.value)));
});

function pangram(s){
    let reg = /\s/g; //Regular expression to identify blank spaces chars
    processed_word = s.toLowerCase().replace(reg, "");
    let result_value ="";
    let i=0;
    for(i; i< alphabet.length; i++){
        if(processed_word.indexOf(alphabet[i]) === -1){
            return result_value="Not a pangram";
        }
    }

    return result_value="Its a pangram";
}
