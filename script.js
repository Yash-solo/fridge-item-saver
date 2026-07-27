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
function showDashBoard(){
    //3 buttons background coloring animation
    document.querySelector('.Dash').style.backgroundColor="rgb(181, 252, 158)";
    document.querySelector('.fridge').style.backgroundColor="white";
    document.querySelector('.addItems').style.backgroundColor="white";


    document.querySelector('.content').innerHTML=`
    <div class="container">
        <div class="hero">
            <div class="heroTXT">
                <h1>Cook Smart Before it expired</h1>
                <h5>see what is in your fridge and get recipe ideas before food goes to waste.</h5>
            </div>
            <img src="./otherImage/fridge.png">
        </div>
    </div>`
}
function showFridgeItems(){
    //3 buttons background coloring animation
    document.querySelector('.Dash').style.backgroundColor="white";
    document.querySelector('.fridge').style.backgroundColor="rgb(181, 252, 158)";
    document.querySelector('.addItems').style.backgroundColor="white";


    document.querySelector('.content').innerHTML =`
    <div class="TEXT">
        <h1>Here I will show the fridge inventory</h1>
    </div>`
}
function showADDitems(){
    //3 buttons background coloring animation
    document.querySelector('.Dash').style.backgroundColor="#fff";
    document.querySelector('.fridge').style.backgroundColor="#fff";
    document.querySelector('.addItems').style.backgroundColor="rgb(181, 252, 158)";

    document.querySelector('.content').innerHTML=`
    <div class="ADD">
        <h5>We will add items here</h5>
    </div>`
}