var input_box = document.querySelector(".input-box")
let string = '';
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // console.log(e.target);
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input_box.value = string;
        }
        else if(e.target.innerHTML == 'AC') {
            string = "";
            input_box.value = string ;
        }
        else if(e.target.innerHTML == 'DEL') {
            string = string.substring(0,string.length-1);
            input_box.value = string ;
        }
        else {
            string = string + e.target.innerHTML;
            input_box.value = string;
        }
    })
})