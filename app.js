'use strict';

var pike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  totalCookies: 0,
  time: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'],
  total: [],
//this will generate a random number to be used later
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
//this is used to generate a number for each hour of the day
  cookiesPerHour: function() {
    return Math.floor(this.avgCookies * this.generateRandom());
  },
//rendering the function to the html page
  render: function() {
    var ul = document.createElement('ul');
    var h2 = document.createElement('h2');

    h2.textContent = '1st & Pike';
    ul.appendChild(h2);
//creating the number for each hour and putting it into an array
    for (var k = 0; k < this.time.length; k++) {
      this.total.push(this.cookiesPerHour());
//associating the random number to each hour and placing it in an li element
      for(var b = 0; b < this.total.length; b++){
        var li = document.createElement('li');
        li.textContent = this.time[k] + ': ' + this.total[b] + ' Cookies';
      }
      ul.appendChild(li);
    };
//summing the hour totals to a total number
    for(var q = 0; q < this.total.length - 1; q++){
      this.totalCookies += this.total[q];
    }
//adding the total to the end of the list
    li.textContent = 'Total: ' + this.totalCookies + 'Cookies';

    var main = document.getElementById('store_info');
    main.appendChild(ul);
  }
};

var seatac = {
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  totalCookies: 0,
  time: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'],
  total: [],
//this will generate a random number to be used later
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
//this is used to generate a number for each hour of the day
  cookiesPerHour: function() {
    return Math.floor(this.avgCookies * this.generateRandom());
  },
//rendering the function to the html page
  render: function() {
    var ul = document.createElement('ul');
    var h2 = document.createElement('h2');

    h2.textContent = 'SeaTac Airport';
    ul.appendChild(h2);
//creating the number for each hour and putting it into an array
    for (var k = 0; k < this.time.length; k++) {
      this.total.push(this.cookiesPerHour());
//associating the random number to each hour and placing it in an li element
      for(var b = 0; b < this.total.length; b++){
        var li = document.createElement('li');
        li.textContent = this.time[k] + ': ' + this.total[b] + ' Cookies';
      }
      ul.appendChild(li);
    };
//summing the hour totals to a total number
    for(var q = 0; q < this.total.length - 1; q++){
      this.totalCookies += this.total[q];
    }
//adding the total to the end of the list
    li.textContent = 'Total: ' + this.totalCookies + 'Cookies';

    main.appendChild(ul);
  }
};

var seattle = {
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  totalCookies: 0,
  time: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'],
  total: [],
//this will generate a random number to be used later
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
//this is used to generate a number for each hour of the day
  cookiesPerHour: function() {
    return Math.floor(this.avgCookies * this.generateRandom());
  },
//rendering the function to the html page
  render: function() {
    var ul = document.createElement('ul');
    var h2 = document.createElement('h2');

    h2.textContent = 'Seattle Airport';
    ul.appendChild(h2);
//creating the number for each hour and putting it into an array
    for (var k = 0; k < this.time.length; k++) {
      this.total.push(this.cookiesPerHour());
//associating the random number to each hour and placing it in an li element
      for(var b = 0; b < this.total.length; b++){
        var li = document.createElement('li');
        li.textContent = this.time[k] + ': ' + this.total[b] + ' Cookies';
      }
      ul.appendChild(li);
    };
//summing the hour totals to a total number
    for(var q = 0; q < this.total.length - 1; q++){
      this.totalCookies += this.total[q];
    }
//adding the total to the end of the list
    li.textContent = 'Total: ' + this.totalCookies + 'Cookies';

    main.appendChild(ul);
  }
};

var capital = {
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  totalCookies: 0,
  time: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'],
  total: [],
//this will generate a random number to be used later
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
//this is used to generate a number for each hour of the day
  cookiesPerHour: function() {
    return Math.floor(this.avgCookies * this.generateRandom());
  },
//rendering the function to the html page
  render: function() {
    var ul = document.createElement('ul');
    var h2 = document.createElement('h2');

    h2.textContent = 'Capital Hill';
    ul.appendChild(h2);
//creating the number for each hour and putting it into an array
    for (var k = 0; k < this.time.length; k++) {
      this.total.push(this.cookiesPerHour());
//associating the random number to each hour and placing it in an li element
      for(var b = 0; b < this.total.length; b++){
        var li = document.createElement('li');
        li.textContent = this.time[k] + ': ' + this.total[b] + ' Cookies';
      }
      ul.appendChild(li);
    };
//summing the hour totals to a total number
    for(var q = 0; q < this.total.length - 1; q++){
      this.totalCookies += this.total[q];
    }
//adding the total to the end of the list
    li.textContent = 'Total: ' + this.totalCookies + 'Cookies';

    main.appendChild(ul);
  }
};

var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  totalCookies: 0,
  time: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'],
  total: [],
//this will generate a random number to be used later
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
//this is used to generate a number for each hour of the day
  cookiesPerHour: function() {
    return Math.floor(this.avgCookies * this.generateRandom());
  },
//rendering the function to the html page
  render: function() {
    var ul = document.createElement('ul');
    var h2 = document.createElement('h2');

    h2.textContent = 'Alki';
    ul.appendChild(h2);
//creating the number for each hour and putting it into an array
    for (var k = 0; k < this.time.length; k++) {
      this.total.push(this.cookiesPerHour());
//associating the random number to each hour and placing it in an li element
      for(var b = 0; b < this.total.length; b++){
        var li = document.createElement('li');
        li.textContent = this.time[k] + ': ' + this.total[b] + ' Cookies';
      }
      ul.appendChild(li);
    };
//summing the hour totals to a total number
    for(var q = 0; q < this.total.length - 1; q++){
      this.totalCookies += this.total[q];
    }
//adding the total to the end of the list
    li.textContent = 'Total: ' + this.totalCookies + 'Cookies';

    main.appendChild(ul);
  }
};

var main = document.getElementById('store_info');

pike.render();
seatac.render();
seattle.render();
capital.render();
alki.render();
