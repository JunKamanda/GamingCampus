const btnHeader = document.querySelector(".btnHeader")
const imgAnim = document.querySelector("#logo > img")
const divAnims = document.querySelectorAll(".main-news-container > div");
const listes = document.querySelectorAll(".liste")

let lastScroll = scrollY

window.addEventListener("load", ()=>{
    btnHeader.classList.add("btnAnim");
    imgAnim.classList.add("imgAnim");
    titleHeader.classList.add("titleHeader");
})

window.addEventListener("scroll", ()=>{
    if (lastScroll > scrollY) {
        nav.style.top = 0;
        btn.style.top = "10px";
        if (scrollY == 0) {
            nav.style.opacity = 0.88;
        }else{
            nav.style.opacity = 1;
        }
    }else{
        nav.style.top = "-70px";
        btn.style.top = "-70px";
    }
    lastScroll = scrollY;

    divAnims.forEach((divAnim)=>{
        if (scrollY >= 980) {
        divAnim.classList.add("divAnim");
    }
    })
})

/* SIDEBAR */
/* SIDEBAR */
/* SIDEBAR */
/* SIDEBAR */
contents.addEventListener("click", ()=>{
    sidebar.classList.remove("showsidebar")
    btn.classList.remove("togglebtn")
});
btn.addEventListener("click", ()=>{
    sidebar.classList.toggle("showsidebar")
    btn.classList.toggle("togglebtn")
});

//LesListesDeLaNavbar
//LesListesDeLaNavbar
//LesListesDeLaNavbar
listes.forEach((liste)=>{
    liste.addEventListener("click", ()=>{
        document.querySelector(".active")?.classList.remove("active");
        liste.classList.add("active");
    });
});