const d= document,
ls=localStorage;

export default function darkTheme(btn,classDark){
const $themeBtn = d.querySelector(btn),
$selectors = d.querySelectorAll("[data-dark]")//todos los elementos

let moon = "🌙",
sun="☀️";

const LightMode=()=>{
    $selectors.forEach((el) => el.classList.remove(classDark)); 
    $themeBtn.textContent = moon;
    ls.setItem("them","light");
};

const DarkMode= ()=>{
    $selectors.forEach((el) => el.classList.add(classDark)); 
    $themeBtn.textContent = sun;
    ls.setItem("them","dark");
};

d.addEventListener("click", (e) => {
    if(e.target.matches(btn)){
        if($themeBtn.textContent === moon){
         DarkMode();
        }else{
         LightMode();   
        }
    }
});

d.addEventListener("DOMContentLoaded",e =>{
    if(ls.getItem("them")=== null) ls.setItem("theme","light");
    if(ls.getItem("them")=== "light"){
        LightMode();
    } 

    if(ls.getItem("them")=== "dark"){
        DarkMode();
    } 
});
}