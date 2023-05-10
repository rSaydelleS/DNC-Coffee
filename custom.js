const over = document.getElementById('one');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
function show_1(){
    btn1.style.display = 'block';
}
function show_2(){
    btn2.style.display = 'block';
}
function show_3(){
    btn3.style.display = 'block';
}
function show_4(){
    btn4.style.display = 'block';
}
function exit_1(){
    btn1.style.display = 'none';
}
function exit_2(){
    btn2.style.display = 'none';
}
function exit_3(){
    btn3.style.display = 'none';
}
function exit_4(){
    btn4.style.display = 'none';
}

function modal(){
    const modal = document.getElementById('modal-div');
    modal.style.display = 'block'
}
function exitbtn(){
    const modal = document.getElementById('modal-div');
    modal.style.display = 'none' 
}
