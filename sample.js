screen = document.getElementById('screen')

function btnclick(value){
    screen.value += value;
}

function screen_remove(){
    screen.value = " "
}

function find_result(){
    result = eval(screen.value)
    screen.value = result
}