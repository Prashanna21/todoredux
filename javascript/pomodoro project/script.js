const inputMins = document.getElementById("input-mins")
const inputSecs = document.getElementById("input-secs")
const startBtn = document.getElementById("start-btn")

let timer;



function toFixed(num, fixed) {
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
}


timerFnc = (givenTime) => {
    startBtn.textContent = "Stop"
    startBtn.name = "stop"
    

       time = givenTime
        timer = setInterval(() => {
            displayInFormat = () => {
                
                let minutes = Math.floor(time / 60);
                let seconds = time - minutes * 60;

                inputMins.value = minutes;
                inputSecs.value = seconds;
                
                time--;

                if(time <= -1)
                    {
                        clearInterval(timer);
                        startBtn.textContent = "Start"
                    }
            }
            displayInFormat()

        }, 1000)
}   


startBtn.onclick = () => {
    if(startBtn.name === "start"){
        let inSeconds = Number(inputMins.value * 60) + Number(inputSecs.value)
        timerFnc(inSeconds)
    }
    else{
        clearInterval(timer)
        startBtn.textContent = "Start"
        startBtn.name = "start"

    }
    
}


