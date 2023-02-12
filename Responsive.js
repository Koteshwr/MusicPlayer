// Responsive code for mobiledocuen


let page = document.getElementById("mobile-home");
let musiclist = document.getElementById("list-icon");
page.style.visibility = "visible";

if (screen.width <= 400) {
    document.getElementsByClassName("songListItems")[0].classList.add("songListItems_mobile");
    document.getElementsByClassName("songListItems")[0].classList.remove("songListItems");
  

}
musiclist.addEventListener('click', () => {

    if ( page.style.height == '75vh') {
        // page.style.visibility = "collapse";
        page.style.height = '0vh';
        musiclist.classList.remove("fa-bars");
        musiclist.classList.add("fa-square-xmark");
    }
    else{
        // page.style.visibility = "visible";
        page.style.height = '75vh';
        musiclist.classList.add("fa-bars");
        musiclist.classList.remove("fa-square-xmark");
    }

})
