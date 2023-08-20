'use strict';

//object literal for seattle store

const seattle = {
  name: 'Seattle',
  customersMin: 23,
  customersMax: 65, 
  hours: [14],
  avgCookiesPerCustomer: 6.3,
  cstPHr: [], 
//  cookiesPHr: [],
  test: function(){
    //This section creates a random number of customers and stores the information in an array
    //then pushes it to the variable cstPHR then returns said value on screen
    let custArray = [];
    for(let i =0; i < this.hours; i++){
      const ranCustNum = Math.floor(Math.random()*(this.customersMax-this.customersMin)+this.customersMin);
      custArray.push(ranCustNum);
      this.cstPHr = custArray;
    }
    return this.cstPHr;
  }, 

  //section below takes the random number of customers per hour and multiplies it by the
  //average cookies sold per customer for example 2 customers per hour time 6.3 cookies is 12.6 rounded
  //down to 12 for a whole number.
  cookies: function(){
    const cookiesArray = this.cstPHr;
    const cookieMultiplier = this.avgCookiesPerCustomer;
    const multipliedArray = [];
    for(const num of cookiesArray){
      const multipliedValue = parseInt(num * cookieMultiplier);
      multipliedArray.push(multipliedValue);
    }
    //console.log(multipliedArray);
    return(multipliedArray);
    //console.log(cookiesArray);


  },

  render: function() {
    const seattleContainer = document.getElementById('test');

    const seattleName = document.createElement('p');
    seattleName.textContent = `City: ${this.name}`;

    seattleContainer.appendChild(seattleName);

    const customerNumber = document.createElement('p');
    customerNumber.textContent = `Random number of customers per hour: ${this.test()}`;
    seattleContainer.appendChild(customerNumber);

    
    const cookieNumber = document.createElement('p');
    cookieNumber.textContent = `Cookies sold per hour based on customers per hour: ${this.cookies()}`;
    seattleContainer.appendChild(cookieNumber);
    
  }
};


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