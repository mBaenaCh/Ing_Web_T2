const button = document.getElementById('btn_submit');

button.addEventListener('click', function(){
    //let vector = [1, 2, 3, 1, 3];
    console.log(not_unique_values([1, 2, 3, 1, 3]));
});

function not_unique_values(s){
    let new_vector = [];
    let i = 0;
    //Comparing one value of the array with the next ones
    for(i; i < s.length; i++){
        let j = 0;
        //Resetting the count for every next value
        let count = 0;
        for(j; j < s.length; j++){
            //If the value is the same
            if(s[j] == s[i]){
                count++;
            }
        }
        //Pushing to the result vector the non-unique values
        if(count >= 2){
            new_vector.push(s[i]);
        }

    }
    return new_vector;
}