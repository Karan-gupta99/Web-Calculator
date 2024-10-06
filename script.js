let select = document.querySelectorAll('.first');
let value = document.getElementById("value");
let string = "";

Array.from(select).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            value.value = string;
        }

        else if(e.target.innerHTML == "C"){
            string = "";
            value.value = string;
        }

        else{
        // console.log(e.target);
        string = string + e.target.innerHTML;
        value.value = string;
        }
    })
})