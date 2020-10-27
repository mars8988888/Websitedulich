window.onload = function(){
//----------------make time calculator----------------------------------------------------------------
    var second = 00;
    var milisecond = 00;

    var buttonSecond = document.getElementById("seconds");
    var buttonMillisecond = document.getElementById("miliseconds");
    var buttonStart = document.getElementById("start");
    var buttonStop = document.getElementById("stop");
    var buttonReset = document.getElementById("reset");
    var abc;

    buttonStart.onclick = function(){
        clearInterval(abc);
        abc = setInterval(settimer,10);
    }

    buttonStop.onclick = function(){
        clearInterval(abc);
    }

    buttonReset.onclick = function(){
        clearInterval(abc);
        second = "00";
        milisecond = "00";
        buttonSecond.innerHTML = second;
        buttonMillisecond.innerHTML = milisecond;
    }

    function settimer(){
        milisecond++;

        if(milisecond < 9) {
            buttonMillisecond.innerHTML = "0" + milisecond;
        }
        if(milisecond > 9){
            buttonMillisecond.innerHTML = milisecond;
        }

        if( milisecond > 99) {
            console.log("seconds");
            second++;
            buttonSecond.innerHTML = "0" + second;
            milisecond = 0;
            buttonMillisecond.innerHTML ="0" + 0;

        }

        if(second > 9){
            buttonSecond.innerHTML = second;
        }
    }
//------------------------------------------make a clock-----------------------------------------------------------
    
function showTime(){
                var date = new Date();
                var h = date.getHours();
                var m = date.getMinutes();
                var s = date.getSeconds();
                var session = "AM"

                if(h == 0){
                h =12;
                }

                if (h > 12){
                h= h - 12;
                session = "PM";
            }

            h = (h < 10) ? "0" + h : h;
            m = (m < 10) ? "0" + m : m;
            s = (s < 10) ? "0" + s : s;

            var time = h + ":" + m + ":" + s + "" + session;
            document.getElementById("dongho").innerText = time;
            document.getElementById("dongho").textContent = time;
            setTimeout(showTime, 1000);                       
                }
showTime();                                          
}

