"use strict";

//object literal for seattle store
const storeNames = ["Seattle", "Tokyo", "Dubai", "Paris", "Lima"];
const storeHours = [
  "6:00 am",
  "7:00 am",
  "8:00 am",
  "9:00 am",
  "10:00 am",
  "11:00 am",
  "12:00 pm",
  "1:00 pm",
  "2:00 pm",
  "3:00 pm",
  "4:00 pm",
  "5:00 pm",
  "6:00 pm",
  "7:00 pm",
  "8:00 pm",
];
/*
const seattle = {
  name: "Seattle",
  customersMin: 23,
  customersMax: 65,
  avgCookiesPerCustomer: 6.3,
  cstPHr: [],
  cookiesPHr: [],
  salesTotal: 0,
  randomizer: function () {
    //This section creates a random number of customers and stores the information in an array
    //then pushes it to the variable cstPHR then returns said value on screen
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
  },

  //section below takes the random number of customers per hour and multiplies it by the
  //average cookies sold per customer for example 2 customers per hour time 6.3 cookies is 12.6 rounded
  //down to 12 for a whole number.
  cookieCalculation: function () {
    const cookiesArray = this.cstPHr;
    const cookieMultiplier = this.avgCookiesPerCustomer;
    const multipliedArray = [];
    for (const num of cookiesArray) {
      const multipliedValue = parseInt(num * cookieMultiplier);
      multipliedArray.push(multipliedValue);
      this.salesTotal += multipliedValue;
    }

    this.cookiesPHr = multipliedArray;
  },

  render: function () {
    const seattleContainer = document.getElementById("seattle");

    const seattleName = document.createElement("p");
    seattleName.textContent = `${this.name}`;

    seattleContainer.appendChild(seattleName);

    const customerContainer = document.getElementById("list");

    for (let i = 0; i < storeHours.length; i++) {
      const customerPHour = document.createElement("li");
      customerPHour.textContent = `${storeHours[i]} : ${this.cookiesPHr[i]} cookies`;
      customerContainer.appendChild(customerPHour);
    }
    const dailyTotal = document.createElement("p");
    dailyTotal.textContent = `Total: ${this.salesTotal} cookies`;
    customerContainer.appendChild(dailyTotal);
  },
};


const tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookiesPerCst: 1.2,
  cstContainer: [],
  cookiesContainer: [],
  totalSales: 0,
  randomizer: function(){
    let tokyoArray = [];
    for (let i = 0; i < storeHours.length; i++) {
      const ranCustomer = Math.floor(
        Math.random() * (this.maxCust - this.minCust) +
          this.minCust
      );
      tokyoArray.push(ranCustomer);
    }
    this.cstContainer = tokyoArray;
    return this.cstContainer;
  },
  cookieCalculation: function(){
    const arrayOfCookies = this.cstContainer;
    const multiplyCookies = this.avgCookiesPerCst;
    const tokyoarrayOfCookies = [];
    for (const num of arrayOfCookies) {
      const multiplyValue = parseInt(num * multiplyCookies);
      tokyoarrayOfCookies.push(multiplyValue);
      this.totalSales += multiplyValue;
    }
    this.cookiesContainer = tokyoarrayOfCookies;
  },

  render: function(){
    const cityContainer = document.getElementById("tokyo");

    const cityName = document.createElement("p");
    cityName.textContent = `${this.name}`;

    cityContainer.appendChild(cityName);

    const customerContain = document.getElementById("tokyo-list");

    for (let i = 0; i < storeHours.length; i++) {
      const customerPHour = document.createElement("li");
      customerPHour.textContent = `${storeHours[i]} : ${this.cookiesContainer[i]} cookies`;
      customerContain.appendChild(customerPHour);
    }
    const dailyTotal = document.createElement("p");
    dailyTotal.textContent = `Total: ${this.totalSales} cookies`;
    customerContain.appendChild(dailyTotal);
  },
};



const dubai = {
  name:'Dubai', 
  minCust: 11,
  maxCust: 38,
  avgCookiesPerCst: 3.7,
  cstContainer: [],
  cookiesContainer: [],
  totalSales: 0,
  randomizer: function(){
    let tokyoArray = [];
    for (let i = 0; i < storeHours.length; i++) {
      const ranCustomer = Math.floor(
        Math.random() * (this.maxCust - this.minCust) +
          this.minCust
      );
      tokyoArray.push(ranCustomer);
    }
    this.cstContainer = tokyoArray;
    return this.cstContainer;
  },
  cookieCalculation: function(){
    const arrayOfCookies = this.cstContainer;
    const multiplyCookies = this.avgCookiesPerCst;
    const tokyoarrayOfCookies = [];
    for (const num of arrayOfCookies) {
      const multiplyValue = parseInt(num * multiplyCookies);
      tokyoarrayOfCookies.push(multiplyValue);
      this.totalSales += multiplyValue;
    }
    this.cookiesContainer = tokyoarrayOfCookies;
  },

  render: function(){
    const cityContainer = document.getElementById("dubai");

    const cityName = document.createElement("p");
    cityName.textContent = `${this.name}`;

    cityContainer.appendChild(cityName);

    const customerContain = document.getElementById("dubai-list");

    for (let i = 0; i < storeHours.length; i++) {
      const customerPHour = document.createElement("li");
      customerPHour.textContent = `${storeHours[i]} : ${this.cookiesContainer[i]} cookies`;
      customerContain.appendChild(customerPHour);
    }
    const dailyTotal = document.createElement("p");
    dailyTotal.textContent = `Total: ${this.totalSales} cookies`;
    customerContain.appendChild(dailyTotal);
  },
};


const paris = {
  name:'Paris', 
  minCust: 20,
  maxCust: 38,
  avgCookiesPerCst: 2.3,
  cstContainer: [],
  cookiesContainer: [],
  totalSales: 0,
  randomizer: function(){
    let tokyoArray = [];
    for (let i = 0; i < storeHours.length; i++) {
      const ranCustomer = Math.floor(
        Math.random() * (this.maxCust - this.minCust) +
          this.minCust
      );
      tokyoArray.push(ranCustomer);
    }
    this.cstContainer = tokyoArray;
    return this.cstContainer;
  },
  cookieCalculation: function(){
    const arrayOfCookies = this.cstContainer;
    const multiplyCookies = this.avgCookiesPerCst;
    const tokyoarrayOfCookies = [];
    for (const num of arrayOfCookies) {
      const multiplyValue = parseInt(num * multiplyCookies);
      tokyoarrayOfCookies.push(multiplyValue);
      this.totalSales += multiplyValue;
    }
    this.cookiesContainer = tokyoarrayOfCookies;
  },

  render: function(){
    const cityContainer = document.getElementById("paris");

    const cityName = document.createElement("p");
    cityName.textContent = `${this.name}`;

    cityContainer.appendChild(cityName);

    const customerContain = document.getElementById("paris-list");

    for (let i = 0; i < storeHours.length; i++) {
      const customerPHour = document.createElement("li");
      customerPHour.textContent = `${storeHours[i]} : ${this.cookiesContainer[i]} cookies`;
      customerContain.appendChild(customerPHour);
    }
    const dailyTotal = document.createElement("p");
    dailyTotal.textContent = `Total: ${this.totalSales} cookies`;
    customerContain.appendChild(dailyTotal);
  },
};


const lima = {
  name:'Lima', 
  minCust: 2,
  maxCust: 16,
  avgCookiesPerCst: 4.6,
  cstContainer: [],
  cookiesContainer: [],
  totalSales: 0,
  randomizer: function(){
    let tokyoArray = [];
    for (let i = 0; i < storeHours.length; i++) {
      const ranCustomer = Math.floor(
        Math.random() * (this.maxCust - this.minCust) +
          this.minCust
      );
      tokyoArray.push(ranCustomer);
    }
    this.cstContainer = tokyoArray;
    return this.cstContainer;
  },
  cookieCalculation: function(){
    const arrayOfCookies = this.cstContainer;
    const multiplyCookies = this.avgCookiesPerCst;
    const tokyoarrayOfCookies = [];
    for (const num of arrayOfCookies) {
      const multiplyValue = parseInt(num * multiplyCookies);
      tokyoarrayOfCookies.push(multiplyValue);
      this.totalSales += multiplyValue;
    }
    this.cookiesContainer = tokyoarrayOfCookies;
  },

  render: function(){
    const cityContainer = document.getElementById("lima");

    const cityName = document.createElement("p");
    cityName.textContent = `${this.name}`;

    cityContainer.appendChild(cityName);

    const customerContain = document.getElementById("lima-list");

    for (let i = 0; i < storeHours.length; i++) {
      const customerPHour = document.createElement("li");
      customerPHour.textContent = `${storeHours[i]} : ${this.cookiesContainer[i]} cookies`;
      customerContain.appendChild(customerPHour);
    }
    const dailyTotal = document.createElement("p");
    dailyTotal.textContent = `Total: ${this.totalSales} cookies`;
    customerContain.appendChild(dailyTotal);
  },
};
*/


function StoreCalculator(name, customersMin, customersMax, avgCookiesPerCst) {
  this.name = name;
  this.customersMin = customersMin;
  this.customersMax = customersMax;
  this.avgCookiesPerCustomer = avgCookiesPerCst;
  this.cstPHr = [];
  this.cookiesPHr = [];
  this.salesTotal = 0;
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
//dont touch below section
const tableContainer = document.getElementById('cities');
const blankElement = document.createElement('th');
blankElement.textContent = 'Store';
tableContainer.appendChild(blankElement);

for(let i = 0; i < storeHours.length; i++){
  const locationHours = document.createElement('th');
  locationHours.textContent = storeHours[i];
  tableContainer.appendChild(locationHours);
}

const dailySalesTotal = document.createElement('th');
dailySalesTotal.textContent = "Daily Sales Total";
tableContainer.appendChild(dailySalesTotal);

/*for(let i = 0; i <storeNames.length; i++){
  const locationNames = document.createElement('tr');
  locationNames.textContent = storeNames[i];
  tableContainer.appendChild(locationNames);
}
*/
//don't touch above section


StoreCalculator.prototype.render = function () {
  const newRow = document.createElement('tr');
  const cityName = document.createElement('td');
  const salesForDay = document.createElement('td');
  cityName.textContent = this.name;
  newRow.appendChild(cityName);
  for(let i = 0; i<storeHours.length; i++){
    const cookieSales = document.createElement('td');
    cookieSales.textContent = this.cookiesPHr[i];
    newRow.appendChild(cookieSales);
    salesForDay.textContent = this.salesTotal;
    newRow.appendChild(salesForDay);
  }
  tableContainer.appendChild(newRow);
    


 /* for (let i = 0; i < storeHours.length; i++) {
      const hourlySales = document.createElement("td");
      hourlySales.textContent = this.cookiesPHr[i];
      tableContainer.appendChild(hourlySales);
    }
 */
  
  /*for (let i = 0; i <= storeHours.length; i++) {
    const blankElement = document.createElement("th");
    blankElement.textContent = "";
    cityContainer.appendChild(blankElement);
    const locationHours = document.createElement("th");
    locationHours.textContent = storeHours;
    cityContainer.appendChild(locationHours);
  }

 
  for (let i = 0; i < storeNames.length; i++) {
    const locationNames = document.createElement("tr");
    locationNames.textContent = storeNames[i];
    cityContainer.appendChild(locationNames);
  }

  /*
    const seattleName = document.createElement("p");
    seattleName.textContent = `${this.name}`;
    cityContainer.appendChild(seattleName);

    for (let i = 0; i < storeHours.length; i++) {
      const customerPHour = document.createElement("th");
      customerPHour.textContent = `${storeHours[i]} : ${this.cookiesPHr[i]} cookies`;
      cityContainer.appendChild(customerPHour);
    }
    

    const dailyTotal = document.createElement("p");
    dailyTotal.textContent = `Total: ${this.salesTotal} cookies`;
    cityContainer.appendChild(dailyTotal);

  */
};

const seattleStore = new StoreCalculator("Seattle: ", 23, 65, 6.3);
const tokyoStore = new StoreCalculator("Tokyo: ", 3, 24, 1.2);
const dubaiStore = new StoreCalculator("Dubai: ", 11, 38, 3.7);
const parisStore = new StoreCalculator("Paris: ", 20, 38, 2.3);
const limaStore = new StoreCalculator("Lima: ", 2, 16, 4.6);

const storeTotals = seattleStore.cookiesPHr + tokyoStore.cookiesPHr +
dubaiStore.cookiesPHr + parisStore.cookiesPHr + limaStore.cookiesPHr;

const locations = [seattleStore, tokyoStore, dubaiStore, parisStore, limaStore];
/*
seattleStore.randomizer();
seattleStore.cookieCalculator();
seattleStore.render();

tokyoStore.randomizer();
tokyoStore.cookieCalculator();
tokyoStore.render();
*/

for(let i = 0; i <locations.length; i++){
  locations[i].randomizer();
  locations[i].cookieCalculator();
  locations[i].render();
}




/*
seattle.randomizer();
seattle.cookieCalculation();
seattle.render();

tokyo.randomizer();
tokyo.cookieCalculation();
tokyo.render();

dubai.randomizer();
dubai.cookieCalculation();
dubai.render();
console.log(seattle.cstPHr);

paris.randomizer();
paris.cookieCalculation();
paris.render();

lima.randomizer();
lima.cookieCalculation();
lima.render();
*/
