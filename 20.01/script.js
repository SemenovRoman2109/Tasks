function updateTime() {
    // Здесь должен быть элемент hours 
    const hours = document.querySelector(".hours");
    // Здесь должен быть элемент minutes 
    const minutes = document.querySelector(".minutes");
    // Здесь должен быть элемент seconds
    const seconds = document.querySelector(".seconds");

    const clock = new Date();
    
    hours.innerHTML = "hours:"+clock.getHours();
    minutes.innerHTML = "minutes:"+clock.getMinutes();
    seconds.innerHTML = "seconds:"+clock.getSeconds();

}
// Здесь должен быть задан интервал
setInterval(updateTime, 1000);