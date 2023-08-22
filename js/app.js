"use strict";

//object literal for seattle store
const storeHours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "8pm",
];
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
      customerPHour.textContent = `${storeHours[i]} : ${this.cookiesPHr[i]}`;
      customerContainer.appendChild(customerPHour);
    }
    const dailyTotal = document.createElement("p");
    dailyTotal.textContent = `Total: ${this.salesTotal}`;
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
      customerPHour.textContent = `${storeHours[i]} : ${this.cookiesContainer[i]}`;
      customerContain.appendChild(customerPHour);
    }
    const dailyTotal = document.createElement("p");
    dailyTotal.textContent = `Total: ${this.totalSales}`;
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
      customerPHour.textContent = `${storeHours[i]} : ${this.cookiesContainer[i]}`;
      customerContain.appendChild(customerPHour);
    }
    const dailyTotal = document.createElement("p");
    dailyTotal.textContent = `Total: ${this.totalSales}`;
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
      customerPHour.textContent = `${storeHours[i]} : ${this.cookiesContainer[i]}`;
      customerContain.appendChild(customerPHour);
    }
    const dailyTotal = document.createElement("p");
    dailyTotal.textContent = `Total: ${this.totalSales}`;
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
      customerPHour.textContent = `${storeHours[i]} : ${this.cookiesContainer[i]}`;
      customerContain.appendChild(customerPHour);
    }
    const dailyTotal = document.createElement("p");
    dailyTotal.textContent = `Total: ${this.totalSales}`;
    customerContain.appendChild(dailyTotal);
  },
};

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
