const num = document.querySelector(".head");
const sum = document.querySelector(".ul");
num.addEventListener("click", () => {
    num.classList.toggle("active");
    sum.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () =>{
        num.classList.remove("active");
        sum.classList.remove("active");
    }))
