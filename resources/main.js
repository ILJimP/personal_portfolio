let element1 = document.getElementById('phone');
let element2 = document.getElementById('email');

let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');


element1.hidden = true;
element2.hidden = true;


function showPhone() {
    element1.hidden = false;
};

function showEmail() {
    element2.hidden = false;
};




button1.onclick = showPhone;
button2.onclick = showEmail;
