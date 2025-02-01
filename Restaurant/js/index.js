// showing nav menu 
const navMenu = document.querySelector(".nav_menu");
const showMenu = (menuCls,tggolCls)=>{
  const menuToggol = document.querySelector(tggolCls);
  if(navMenu && menuToggol){
    menuToggol.addEventListener("click",(e)=>{
      navMenu.classList.toggle("show_nav_menu")
    })
  }
  
}
showMenu(".nav_menu",".nav_menu_toggol")


// auto hide menu 
function autoHideMenu(e){
  const btnClassList = Array.from(e.target.classList)
  if(!btnClassList.includes("fa-solid")){
    const menuClassList = Array.from(navMenu.classList)
    if(menuClassList.includes("show_nav_menu")){
      navMenu.classList.remove("show_nav_menu")
    }
  }
}
window.addEventListener("click",autoHideMenu)


// SCROOL REVEAL INITILIZE
ScrollReveal({
  reset:true,
  duration: 2000,
  origin: 'top',
  distance: '30px',
})
ScrollReveal().reveal('.reveal',{interval: 200})


// Navigator refarance 
const Navigators = document.querySelectorAll(".a");
function setActive (e){
  const pathname = URL.parse(e.target.href).hash;
  Array.from(Navigators).forEach((el)=>{
    const hash = URL.parse(el.href).hash;
    if(hash == pathname){
      el.classList.add("active");
    }else{
      el.classList.remove("active");
    }
  })
}
Array.from(Navigators).forEach((nav)=>{
  nav.addEventListener("click",setActive)
})

// Toggol theem 
const theamBtn = document.querySelector("#theme_change") 
const root = document.querySelector("body")
theamBtn.addEventListener("click",()=>{
  root.classList.toggle("body_light")
})