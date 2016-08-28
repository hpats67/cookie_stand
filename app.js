'use strict';

var time = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm',
            '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];

function Store(name, min, max, age) {
  this.name         = name;
  this.minCust      = min;
  this.maxCust      = max;
  this.avgCookies   = age;
  this.totalCookies = 0;
  this.total        = [];
};

Store.prototype.generateRandom = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};
//this is used to generate a number for each hour of the day
Store.prototype.cookiesPerHour = function() {
  return Math.floor(this.avgCookies * this.generateRandom());
};
//rendering the function to the html page
Store.prototype.render = function() {
  var ul = document.createElement('ul');
  var h2 = document.createElement('h2');

  h2.textContent = this.name;
  ul.appendChild(h2);
//creating the number for each hour and putting it into an array
  for (var k = 0; k < time.length; k++) {
    this.total.push(this.cookiesPerHour());
//associating the random number to each hour and placing it in an li element
    for(var b = 0; b < this.total.length; b++){
      var li = document.createElement('li');
      li.textContent = time[k] + ': ' + this.total[b] + ' Cookies';
    };
    ul.appendChild(li);
  };
//summing the hour totals to a total number
  for(var q = 0; q < this.total.length - 1; q++){
    this.totalCookies += this.total[q];
  };
//adding the total to the end of the list
  li.textContent = 'Total: ' + this.totalCookies + 'Cookies';

  var main = document.getElementById('store_info');
  main.appendChild(ul);
};

var pike    = new Store('1st and Pike', 23, 65, 6.3);
var seatac  = new Store('SeaTac Airport', 3, 24, 1.2);
var seattle = new Store('Seattle Center', 11, 38, 3.7);
var capital = new Store('Capital Hill', 20, 38, 2.3);
var alki    = new Store('Alki', 2, 16, 4.6);


pike.render();
seatac.render();
seattle.render();
capital.render();
alki.render();
