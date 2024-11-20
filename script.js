let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (X) => {
        if(X.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(X.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        } 
        else if (X.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += X.target.innerHTML;
            input.value = string
        }
    })
})
