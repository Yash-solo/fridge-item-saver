const cut = document.querySelector(".CUT")
const burger = document.querySelector(".Burger")
byDefaultDashboard();

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
    <div class="AddItemContainer">
      <div class="addITems">
        <h1>Add your Fridge items here!</h1>
        <ul>
            <li>
                <h3>Enter your item name</h3>
                <input type="text" placeholder=" ex:- 'rice'">
            </li>
            <li>
                <h3>Enter in how many days your item will expire</h3>
                <input type="number" placeholder="Ex:- In 3 days ">
            </li>
            <li>
                <h3>Enter the category here</h3>
                <input type="text" placeholder ="Ex:- name:- 'aalu' then category:- 'vegitable'">
            </li>
        </ul>
        <button>Add Items</button>
      </div>
    </div>`
}
function byDefaultDashboard(){
    showDashBoard();
}