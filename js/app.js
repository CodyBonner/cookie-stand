"use strict";

//object literal for seattle store
const storeHours = [ '6am', '7am', '8am', '9am', '10am', '11am',
'12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
const seattle = {
  name: "Seattle",
  customersMin: 23,
  customersMax: 65,
  hours: [14],
  avgCookiesPerCustomer: 6.3,
  cstPHr: [],
  cookiesPHr: [],
  salesTotal: 0,
  test: function () {
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
    //console.log(multipliedArray);
    this.cookiesPHr = multipliedArray;
    
    //console.log(cookiesArray);
  },

  render: function () {
    const seattleContainer = document.getElementById("test");

    const seattleName = document.createElement("p");
    seattleName.textContent = `City: ${this.name}`;

    seattleContainer.appendChild(seattleName);

    /*const customerNumber = document.createElement("p");
    customerNumber.textContent = `Random number of customers per hour: ${this.test()}`;
    seattleContainer.appendChild(customerNumber);
*/
    /*const cookieNumber = document.createElement("p");
    cookieNumber.textContent = `Cookies sold per hour based on customers per hour: ${this.cookies()}`;
    seattleContainer.appendChild(cookieNumber);
*/
    const customerContainer = document.getElementById("list");

    for(let i = 0; i < storeHours.length; i++){
      const customerPHour = document.createElement("li");
      customerPHour.textContent = `${storeHours[i]} : ${this.cookiesPHr[i]}`;
      customerContainer.appendChild(customerPHour);

    }
    const dailyTotal = document.createElement('p');
    dailyTotal.textContent = `Total: ${this.salesTotal}`;
    customerContainer.appendChild(dailyTotal);
    //const customerPHour2 = document.createElement("li");
    //customerPHour2.textContent = `7am : ${this.cstPHr[1]}`;
    //customerContainer.appendChild(customerPHour2);
  },
};

seattle.test();
seattle.cookieCalculation();
seattle.render();
console.log(seattle.cstPHr);

//console.log(parseInt(seattle.cstPHr) * seattle.avgCookiesPerCustomer);

/*
function getDataForCity(city){
  let randomCustomerNumber = city.customersPerHour();
  let cityMinCust = city.customersMin / randomCustomerNumber;
  let resultArray = [];
  resultArray.push(cityMinCust);
  return resultArray;
}





//cookies per hour
let seattleHourlyCookies = getHourlyCookierForCity(seattle);

function getHourlyCookierForCity(city){
  let result = [];
  for(let i = 0; i < 14; i++){
    let randomCustomerNumber = city.customersPerHour();
    let hourPurchasedCookies = randomCustomerNumber * city.avgCookiesPerCustomer;
    result.push(hourPurchasedCookies);
  }
  return result;
}

console.log(seattleHourlyCookies);

let randomCustomerNumber = seattle.customersPerHour();
console.log(randomCustomerNumber);
let seattleMinCust =  seattle.customersMin / randomCustomerNumber;

let seattleData;

console.log(seattleMinCust);




seattleData = getDataForCity(seattle);

console.log(seattleData);


*/
