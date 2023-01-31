// Responsive code for mobile


console.log(screen.width)
if (screen.width <= 400) {
    document.getElementsByClassName("songListItems")[0].classList.add("songListItems_mobile")
    document.getElementsByClassName("songListItems")[0].classList.remove("songListItems")
    
}