
var clock_1 = document.querySelector(".date")
var clock_2 = document.querySelector(".hour")

var clock = document.querySelector("#clock")

const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
setInterval(() => {
    var clock = new Date();
    var z = clock.getFullYear() + "/ " + month[clock.getMonth()] + " /" + clock.getDate()
    var hours = clock.getHours();
    var min = clock.getMinutes();
    var sec = clock.getSeconds();
    var x = "AM";
    if (hours > 12) {
        x = "PM"
        hours -= 12
        if (hours < 10) {
            hours = "0" + hours
        }


    }
    if (min < 10)
        min = "0" + min
    if (sec < 10)
        sec = "0" + sec

    clock_1.innerHTML = z
    clock_2.innerHTML = "  " + hours + " : " + min + " : " + sec + " " + x

})

//"  " + hours + " : " + min + " : " + sec + " " + x