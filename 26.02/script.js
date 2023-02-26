window.addEventListener("beforeunload",(event)=>{
    const username = document.querySelector("#username");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    
    window.localStorage.setItem("username",username.value);
    window.localStorage.setItem("email",email.value);
    window.localStorage.setItem("password",password.value);
    
})
document.addEventListener("DOMContentLoaded",(event)=>{
    const username = document.querySelector("#username");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    username.value = window.localStorage.getItem("username");
    email.value = window.localStorage.getItem("email");
    password.value = window.localStorage.getItem("password");
})

document.addEventListener("submit",(event)=>{
    window.localStorage.clear();
    username.value = "";
    email.value = "";
    password.value = "";
})