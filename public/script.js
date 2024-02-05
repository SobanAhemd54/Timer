var Start = document.getElementById('start');
var reset = document.getElementById('reset');

var h = document.getElementById('Hours');
var m = document.getElementById('Minuts');
var s = document.getElementById('Secends');
var ms = document.getElementById('Milisecend');


var starttimer = null;

function timer() {
    if (h.value == 0 && m.value == 0 && s.value == 0 && ms.value == 0) {
        h.value = 0;
        m.value = 0;
        s.value = 0;
        ms.value = 0;
    } else if (ms.value != 0) {
        ms.value--;
    } else if (s.value != 0) {
        ms.value = 10;
        s.value--;
    } else if (m.value != 0) {
        s.value = 60;
        m.value--;
    } else if (h.value != 0) {
        m.value = 60;
        h.value--;
    }
}

function stoptimer() {
    clearInterval(starttimer);
}

Start.addEventListener('click', function(){
    function startinterval() {
        starttimer = setInterval(function(){
            timer();
        }, 100);
    }
    startinterval();
});

reset.addEventListener('click' , function(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    ms.value = 0;
    stoptimer();
});
