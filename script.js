const cut = document.querySelector(".CUT")
const burger = document.querySelector(".Burger")
function showSIDEBar(){
    document.querySelector(".navLinksForMOBILE").style.display="flex";
    burger.style.display ="none"
    cut.style.display = "flex";
}
function stopSHOWBar(){
    document.querySelector(".navLinksForMOBILE").style.display="none";
    burger.style.display ="flex"
    cut.style.display = "none";
}