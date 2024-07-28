let time = 5;

let timer  = setInterval(()=>{
    console.log(time--)
    if(time < 0){
        clearInterval(timer);
    }
}, 1000)