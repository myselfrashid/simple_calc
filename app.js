let string = '';
const display = document.getElementsByClassName('.screen');
const number = document.querySelectorAll('.number');
const equal = document.getElementsByClassName('.equal');
Array.from(number).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('.screen').value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = ""
            document.querySelector('.screen').value = string;
        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('.screen').value = string;
        }
    })
})