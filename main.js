
$(document).ready(function(){

    var time = 0;
    var timerA = document.getElementById('timerA');
    var startA = document.getElementById('startA');
    var stopA = document.getElementById('stopA');
    var resetA = document.getElementById('resetA');
    var id;  

    // STARTボタン
    function start(){
       
        startA.disabled = true;
        ++time;  
        
    var m = Math.floor(time/100/60);
    var s = Math.floor(time/100);
    var mS = time % 100;
    
    if (m < 10) m = '0' + m;
    if (s >= 60) s = s % 60; 
    if (s < 10) s = '0' + s; 
   if (mS < 10) mS = '0' + mS;

    timerA.innerHTML = m + ':' + s + ':' + mS;
    id = setTimeout(start, 10);
    }

    // STOPボタン
    function stop(){
    clearTimeout(id);
    startA.disabled = false;
    }

    // RESETボタン
    function reset(){
    clearTimeout(id);
    time = 0;
    timerA.innerHTML = '00:00:00';
    startA.disabled= false;
    }

    
    startA.addEventListener('click', start, false); 
    stopA.addEventListener('click', stop, false); 
    resetA.addEventListener('click', reset, false); 
    
});

























