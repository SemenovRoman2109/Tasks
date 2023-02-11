const arrowTopButton = document.querySelector("#arrowTop")
const arrowDownButton = document.querySelector("#arrowDown")

window.addEventListener("scroll",()=>{
    // document.documentElement.scrollHeight - window.innerHeight В етой формуле я поулчаю полный разммер экрана и отнимаю от него видимую часть дабы получить адаптивное максимальное значение прокрутки 
    if (window.scrollY > (document.documentElement.scrollHeight - window.innerHeight)/2){
        arrowTopButton.hidden = false
        arrowDownButton.hidden = true
    }
    else{
        arrowTopButton.hidden = true
        arrowDownButton.hidden = false
    }
})

arrowTopButton.addEventListener("click",(event) => {
    window.scrollTo(0, 0);
})
arrowDownButton.addEventListener("click",(event) => {
    window.scrollTo(0, document.documentElement.scrollHeight - window.innerHeight);
})