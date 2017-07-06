var dollars = 100;
var cookies = 0;
var open = false;
var toggleCustomersWarned = 0;

function cookieClick(number){
    cookies = cookies + number;
    document.getElementById("cookies").innerHTML = cookies;
};

function openClose() {
  if (toggleCustomersWarned === 0) {
    toggleCustomersWarned === false;
  };
  if (open === false) {
    open = true;
  } else if (open === true) {
    open = false;
  };
};


function buyCookie(){
  if (open === true) {
    cookies = cookies - customers;
    dollars = dollars + customers;
    document.getElementById("cookies").innerHTML = cookies;
    document.getElementById("dollars").innerHTML = dollars;
  };
};

function muffinClick(number){
    muffins = muffins + number;
    document.getElementById("muffins").innerHTML = muffins;
};
function buyMuffin(){
  if (open === true) {
    muffins = muffins - (customers * 2);
    dollars = dollars + (customers * 1.5);
    document.getElementById("muffins").innerHTML = muffins;
    document.getElementById("dollars").innerHTML = dollars;
  };
};

var customers = 0;

function advertise(){
    var customerCost = Math.floor(10 * Math.pow(1.1,customers));     //works out the cost of this customer
    if(dollars >= customerCost){                                   //checks that the player can afford the customer
        customers = customers + 1;                                   //increases number of customers
    	dollars = dollars - customerCost;                          //removes the dollars spent
        document.getElementById('customers').innerHTML = customers;  //updates the number of customers for the user
        document.getElementById('dollars').innerHTML = dollars;  //updates the number of dollars for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,customers));       //works out the cost of the next customer
    document.getElementById('customerCost').innerHTML = nextCost;  //updates the customer cost for the user
};

function saveGame(){
	"use strict";
	var save = {
    cookies: cookies,
    dollars: dollars,
    customers: customers,
    muffins: muffins
	};
	localStorage.setItem("save",JSON.stringify(save));
}

function checkIfMuffinReady() {
  if (dollars >= 1000) {
    var x = document.getElementsByClassName('muffins');
    x.style.display = 'block';
  }
}

function loadGameOnStartup(){
	"use strict";
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.dollars !== "undefined") dollars = savegame.dollars;
  if (typeof savegame.customers !== "undefined") customers = savegame.customers;
  document.getElementById("dollars").innerHTML = dollars;
  document.getElementById("customers").innerHTML = customers;
  if (typeof savegame.cookies !== "undefined") cookies = savegame.cookies;
  document.getElementById("cookies").innerHTML = cookies;
  if (typeof savegame.muffins !== "undefined") cookies = savegame.cookies;
  document.getElementById("cookies").innerHTML = cookies;
  alert("Let's pick up where we left off!");
}

function loadGame(){
	"use strict";
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.dollars !== "undefined") dollars = savegame.dollars;
  if (typeof savegame.customers !== "undefined") customers = savegame.customers;
  document.getElementById("dollars").innerHTML = dollars;
  document.getElementById("customers").innerHTML = customers;
  if (typeof savegame.cookies !== "undefined") cookies = savegame.cookies;
  document.getElementById("cookies").innerHTML = cookies;
  alert("Let's pick up where we left off!");
  if (savegame === null) {
    alert("Your save data is either corrupted or non-existing. If it is corrupted,  you will need to reset.");
    deleteSaveOverride();
  };
}

function deleteSave(){
	"use strict";
	var deleteSave1 = prompt("Are you sure you want to do this? Type 'yes' if so.");
	if(deleteSave1 === "yes"){
		var deleteSave2 = prompt("Are you super sure that you want to start from the very beginning! Your save data cannot be restored! Type in the amount of starting cash you get at the beginning of the game if so.");
    if (deleteSave2 === "100") {
      var deleteSave3 = prompt("This is not prestiging! You will not gain any bonuses from doing this! Type in the creator of this game to completely obliberate your bakery.");
      if (deleteSave3 === "Harry") {
        alert("Alright then, don't say I didn't warn ya...");
        localStorage.removeItem("save");
		alert("Save deleted!");
    dollars = 100;
    document.getElementById("dollars").innerHTML = dollars;
      }
    }
	}
	else{
		alert("Deletion Cancelled! *phew*");
	}
}

function deleteSaveOverride(){
alert("Save deleted!");
    dollars = 100;
    document.getElementById("dollars").innerHTML = dollars;
}

// stop it plz, i pushed it so there will be no more popups!

window.setInterval(function(){
  document.getElementById("dollars").innerHTML = dollars;
  if (cookies > 0) {
  buyCookie();
  };
  if (muffins > 1) {
  buyMuffin();
  };
  checkIfMuffinReady();
}, 1000);
