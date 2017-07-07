var dollars = 100;
var cookies = 0;
var muffins = 0;
var cakes = 0;
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
	  if (cookies <= 0) {
		  cookies = 0
	  };
  };
};

function muffinClick(number){
	if (dollars >= 200) {
		muffins = muffins + number;
		document.getElementById("muffins").innerHTML = muffins;
	}
	else {
		alert("You cant bake muffins until you get enough money!");
	};
};
function buyMuffin(){
  if (dollars >= 200) {
	if (open === true) {
		muffins = muffins - customers;
		dollars = dollars + (customers * 2);
		document.getElementById("muffins").innerHTML = muffins;
		document.getElementById("dollars").innerHTML = dollars;
		if (muffins <= 0) {
			muffins = 0
		};
	};
  };
};
function cakeClick(number){
  if (dollars >= 1000) {
	cakes = cakes + number;
	document.getElementById("cakes").innerHTML = cakes;
	}
	else {
		alert("You cant bake cakes until you get enough money!");
	};
};
function buyCake(){
  if (dollars >= 1000) {
	if (open === true) {
		cakes = cakes - customers;
		dollars = dollars + (customers * 3);
		document.getElementById("cakes").innerHTML = cakes;
		document.getElementById("dollars").innerHTML = dollars;
		if (cakes <= 0) {
			cakes = 0
		};
	};
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
		if (customers >= 10) {
			customers = customers + 1
		};
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,customers));       //works out the cost of the next customer
    document.getElementById('customerCost').innerHTML = nextCost;  //updates the customer cost for the user
};

var hireCount = 1
function hire(){
    if(dollars >= 3000){                                   //checks that the player can afford the customer
        cookies = cookies + 500;                                   //increases number of customers
    	dollars = dollars - (10 * hireCount);                          //removes the dollars spent
		hireCount = hireCount + 1
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of customers for the user
        document.getElementById('dollars').innerHTML = dollars;  //updates the number of dollars for the user
		document.getElementById('hireCount').innerHTML = hireCount;  //updates the number of dollars for the user
		if (dollars >= 10000) {
			muffins = muffins + 500
			dollars = dollars - 200
		};
    };
};


function saveGame(){
	"use strict";
	var save = {
    cookies: cookies,
    dollars: dollars,
    customers: customers,
    muffins: muffins,
	cakes: cakes,
	hireCount: hireCount
	};
	localStorage.setItem("save",JSON.stringify(save));
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
  document.getElementById("muffins").innerHTML = muffins;
  if (typeof savegame.cakes !== "undefined") cookies = savegame.cookies;
  document.getElementById("cakes").innerHTML = cakes;
  if (typeof savegame.hireCount !== "undefined") cookies = savegame.cookies;
  document.getElementById("hireCount").innerHTML = hireCount;
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
  if (typeof savegame.muffins !== "undefined") cookies = savegame.cookies;
  document.getElementById("muffins").innerHTML = muffins;
  if (typeof savegame.cakes !== "undefined") cookies = savegame.cookies;
  document.getElementById("cakes").innerHTML = cakes;
  if (typeof savegame.hireCount !== "undefined") cookies = savegame.cookies;
  document.getElementById("hireCount").innerHTML = hireCount;
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
  if (cakes > 2) {
  buyCake();
  };
  checkIfMuffinReady();
}, 1000);
