const lable=document.getElementById("lable1");

// update()
setInterval(update,1000);
function update(){
    let date = new Date();
    
    lable.innerHTML=formateTime(date);

    function formateTime(){
        let hour=date.getHours();
        let min=date.getMinutes();
        let sec=date.getSeconds();
        let ampm=hour>12?"pm":"am";
        hour=(hour)%12;
        hour=formateZero(hour);
        min=formateZero(min);
        sec=formateZero(sec);
        return`${hour}:${min}:${sec}  ${ampm}`;
    
    }

    function formateZero(time){
        time=time.toString();
        return time.length<2?"0"+time:time;
    }
}