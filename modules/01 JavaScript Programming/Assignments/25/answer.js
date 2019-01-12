(function () {
    var date = new Date();

    var numberDay = date.getDay();
    var day;
    if(numberDay===0)
        day = "Sunday";
    if(numberDay===1)
        day = "Monday";
    if(numberDay===2)
        day = "Tuesday";
    if(numberDay===3)
        day = "Wednesday";
    if(numberDay===4)
        day = "Thursday";
    if(numberDay===5)
        day = "Friday";
    if(numberDay===6)
        day = "Saturday";
    console.log("Today is " + day);

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    console.log("Current time is " + hours + ":" + minutes + ":" + seconds);
})();
