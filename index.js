const btnHeader = document.querySelector(".btnHeader")
const imgAnim = document.querySelector("#logo > img")
const divAnims = document.querySelectorAll(".main-news-container > div");
const sidebar = document.getElementById("side-bar");

lastScroll = scrollY

window.addEventListener("scroll", ()=>{
    if (lastScroll > scrollY) {
        nav.style.top = 0;
        // btn.style.left = "240px";
        if (scrollY == 0) {
            nav.style.opacity = 0.88;
        }else{
            nav.style.opacity = 1;
        }
    }else{
        nav.style.top = "-70px";
        // btn.style.left = "-240px";
    }
    lastScroll = scrollY;

    divAnims.forEach((divAnim)=>{
        if (scrollY >= 980) {
        divAnim.classList.add("divAnim");
    }
    })
})

window.addEventListener("load", ()=>{
    btnHeader.classList.add("btnAnim");
    imgAnim.classList.add("imgAnim");
    titleHeader.classList.add("titleHeader");

    if (window.innerWidth > 697) {
        btn.style.display = "none";
    }else{
        btn.style.display = "block";
    }
})

btn.addEventListener("click", ()=>{
    sidebar.classList.toggle("showSidebar")
})

All_content.addEventListener("click", ()=>{
    sidebar.classList.remove("showSidebar")
})