let navBar = document.getElementById("header__nav-hamburger-btn")
let navList = document.getElementById("header__nav-list")
let bactop = document.getElementById("bactop")
let navshrink = document.getElementById("navshrink")


window.addEventListener("scroll",function(){
    showBactop();
    showNavShrink();
})
navBar.addEventListener("click" ,function(){
    navList.classList.toggle("show-header__nav-list")
})
function showBactop(){
    if(scrollY>200){
        bactop.classList.add("show-bactop")
    }
    else{
        bactop.classList.remove("show-bactop")
    }
}
function showNavShrink(){
    if(scrollY>0){
        navshrink.classList.add("show-navshrink")
    }
    else{
        navshrink.classList.remove("show-navshrink")
    }
}
