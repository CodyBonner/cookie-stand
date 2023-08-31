"use strict";

//object literal for seattle store
//const storeNames = ["Seattle", "Tokyo", "Dubai", "Paris", "Lima"];
const storeHours = [
  "6:00 am",  "7:00 am", "8:00 am", "9:00 am", "10:00 am", "11:00 am",
  "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm",
  "6:00 pm", "7:00 pm", "8:00 pm",
];

let hourTotals = [];

function StoreCalculator(name, customersMin, customersMax, avgCookiesPerCst) {
  this.name = name;
  this.customersMin = customersMin;
  this.customersMax = customersMax;
  this.avgCookiesPerCustomer = avgCookiesPerCst;
  this.cstPHr = [];
  this.cookiesPHr = [];
  this.salesTotal = 0;
  //this.hourlyTotals = 0;
}

StoreCalculator.prototype.randomizer = function () {
  let custArray = [];
  for (let i = 0; i < storeHours.length; i++) {
    const ranCustNum = Math.floor(
      Math.random() * (this.customersMax - this.customersMin) +
        this.customersMin
    );
    custArray.push(ranCustNum);
  }
  this.cstPHr = custArray;
  return this.cstPHr;
};

StoreCalculator.prototype.cookieCalculator = function () {
  const cookiesArray = this.cstPHr;
  const cookieMultiplier = this.avgCookiesPerCustomer;
  const multipliedArray = [];
  for (const num of cookiesArray) {
    const multipliedValue = parseInt(num * cookieMultiplier);
    multipliedArray.push(multipliedValue);
    this.salesTotal += multipliedValue;
  }

  this.cookiesPHr = multipliedArray;
};

StoreCalculator.prototype.render = function () {
  const newRow = document.createElement("tr");
  const cityName = document.createElement("td");
  const salesForDay = document.createElement("td");
  cityName.textContent = this.name;
  newRow.appendChild(cityName);
  for (let i = 0; i < storeHours.length; i++) {
    const cookieSales = document.createElement("td");
    cookieSales.textContent = this.cookiesPHr[i];
    newRow.appendChild(cookieSales);
    salesForDay.textContent = this.salesTotal;
    newRow.appendChild(salesForDay);
  }
  tableContainer.appendChild(newRow);

};

//This section creates variables prototyping to StoreCalculator
const seattleStore = new StoreCalculator("Seattle: ", 23, 65, 6.3);
const tokyoStore = new StoreCalculator("Tokyo: ", 3, 24, 1.2);
const dubaiStore = new StoreCalculator("Dubai: ", 11, 38, 3.7);
const parisStore = new StoreCalculator("Paris: ", 20, 38, 2.3);
const limaStore = new StoreCalculator("Lima: ", 2, 16, 4.6);
//const texasStore = new StoreCalculator("texas", 25, 69, 4.2);

//Section assigns all the above variables to a new array for easy access
const locations = [seattleStore, tokyoStore, dubaiStore, parisStore, limaStore];

const tableContainer = document.getElementById("cities");


//dont touch below section
function headerCreator(){
  const blankElement = document.createElement("th");
  blankElement.textContent = "Store";
  tableContainer.appendChild(blankElement);
  for (let i = 0; i < storeHours.length; i++) {
    const locationHours = document.createElement("th");
    locationHours.textContent = storeHours[i];
    tableContainer.appendChild(locationHours);
  }
  const dailySalesTotal = document.createElement("th");
  dailySalesTotal.textContent = "Daily Sales Total";
  tableContainer.appendChild(dailySalesTotal);
  //don't touch above section
}

headerCreator();

function bodyCreator(){

  for (let i = 0; i < locations.length; i++) {
    locations[i].randomizer();
    locations[i].cookieCalculator();
    locations[i].render();
  }
}


let hrTotalCont = document.createElement('tfoot');
function footerCreator(){
  
  hrTotalCont.textContent = 'Totals: ';
  tableContainer.appendChild(hrTotalCont);

  //let hourTotals = [];
  for(let i =0; i < storeHours.length; i++){ //Common to have outer for loop that has equal number of items as target number of displayed items.
    let hourTotal = 0;
    for(let j = 0; j <locations.length; j++){
      let currentLocation = locations[j];
      let locationHourSale = currentLocation.cookiesPHr[i];
      hourTotal += locationHourSale;
    }
    hourTotals.push(hourTotal);

  }
  let totalOfTotals = 0;
  for(let i = 0; i <storeHours.length; i++){
    const footerInfo = document.createElement('td');
    footerInfo.textContent = hourTotals[i];
    hrTotalCont.appendChild(footerInfo);
    totalOfTotals += hourTotals[i];
  }
  
  const totalOfTotalsCell = document.createElement('td');
  
  totalOfTotalsCell.textContent = totalOfTotals;
  hrTotalCont.appendChild(totalOfTotalsCell);
  //console.log(hourTotals);
}

function footerUpdate(cookiesPHr){
    for(let i = 0; i< cookiesPHr.length; i++){
       hourTotals[i] +=  cookiesPHr[i];
    }
    console.log(hourTotals);
  
    while(hrTotalCont.firstChild){
      hrTotalCont.removeChild(hrTotalCont.firstChild);
    }

    let updatedtotals = 0;
    hrTotalCont.textContent = 'Totals: ';
    tableContainer.appendChild(hrTotalCont);
    for(let i = 0; i < cookiesPHr.length; i++){

      const updatedInfo = document.createElement('td');
      updatedInfo.textContent = hourTotals[i];
      
      updatedtotals += hourTotals[i];
      hrTotalCont.appendChild(updatedInfo);

    }

    const updatedTotalofTotals = document.createElement('td');
    updatedTotalofTotals.textContent = updatedtotals;
    hrTotalCont.appendChild(updatedTotalofTotals);

    
}

//looks and captures form from html
const storeForm = document.getElementById('newStore');

//creates function event type and captures info from user input on html page

function newStoreHandler(event){
  event.preventDefault();
  const newStoreName = event.target.storeName.value;
  const localMinimumCst = parseInt(event.target.minimumCustomers.value);
  const localMaximumCst = parseInt(event.target.maximumCustomers.value);
  const localSalesAverage = parseFloat(event.target.salesAverage.value);
  //logs user input in console to determine if input is recorded
  
  
   const newLocation = new StoreCalculator(newStoreName, localMinimumCst,localMaximumCst,localSalesAverage);

   newLocation.randomizer();
   newLocation.cookieCalculator();
   locations.push(newLocation);
   //footerCreator();
   footerUpdate(newLocation.cookiesPHr);
   newLocation.render();
    
  console.log(locations);

  event.target.reset();
}


storeForm.addEventListener('submit', newStoreHandler);


bodyCreator();
footerCreator();
