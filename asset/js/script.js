/* ========================== Modo de cores =============================== */
//toggle
const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwitcherToggle.addEventListener('click', () =>{
    document.querySelector('.style-switcher').classList.toggle('open');
});


// Ocultar mudança de cor ao rolar pagina
window.addEventListener("scroll", ()=>{
    if(document.querySelector('.style-switcher').classList.contains('open')){
        document.querySelector('.style-switcher').classList.remove('open');
    }
})

// activate color style
const alternateStyles = document.querySelectorAll('.alternate-style');
function setActiveStyle(color){
    alternateStyles.forEach((style) =>  {
        if(color === style.getAttribute('title')){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled", "true");
        }
    })
}


/* ========================= Modo dia e noite ============================= */
const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    dayNight.querySelector('i').classList.toggle('fa-sun');
})
window.addEventListener('load', () => {
    if(document.body.classList.contains('dark')){
        dayNight.querySelector('i').classList.add('fa-moon');
    }
    else{
        dayNight.querySelector('i').classList.add('fa-sun');
    }
})

/*============================ Animação de digitação =======================*/

var typing = new Typed('.typing', {
    strings: ["Estudante de ciência da computação", "Web Desing", "Desenvolvedor web", "Design prototipo"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

/* Ativaçao da pagina atual */
const nav = document.querySelector('.nav');
const navList = nav.querySelectorAll('li');
const totalNavList = navList.length;
const allSection = document.querySelectorAll('.section');
const totolSection = allSection.length;
for(let i = 0; i < totalNavList; i++){
    const a = navList[i].querySelector('a');
    a.addEventListener('click', () => {
        for(let i = 0; i < totolSection; i++){
            allSection[i].classList.remove('back-section');
        }
        for(let j = 0; j < totalNavList; j++){
            if(navList[j].querySelector('a').classList.contains("active")){
                allSection[j].classList.add("back-section")
            }
            navList[j].querySelector('a').classList.remove('active');
        }
        a.classList.add('active');
        showSection(a);
        if(window.innerWidth < 1200){
            asideSectionTogglerBtn();
        }
    })
}
function showSection(element){
    for(let i = 0; i < totolSection; i++){
        allSection[i].classList.remove('active');
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}
function updateNav(element){
    for(let i = 0; i < totalNavList; i++){
        navList[i].querySelector('a').classList.remove('active');
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector('a').getAttribute('href').split("#")[1]){
            navList[i].querySelector('a').classList.add('active');
        }
    }
}
document.querySelector(".more-about").addEventListener("click", function (){
    showSection(this);
    updateNav(this);
})

///

const navTogglerBtn = document.querySelector('.nav-toggler');
const aside = document.querySelector('.aside');
navTogglerBtn.addEventListener('click', () => {
    asideSectionTogglerBtn();
    })
function asideSectionTogglerBtn(){
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
    for(let i = 0; i < totolSection; i++){
        allSection[i].classList.toggle('open');
        nav
    }
}