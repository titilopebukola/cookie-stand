function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const hours = [
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
];

function CookieStore(name, minCust, maxCust, avgSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.custPerHour = [];
  this.cookiesPerHour = [];
  this.totcookiesPerHour = [];
}

CookieStore.prototype.calcCustPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let numCust = randomNum(this.minCust, this.maxCust);
    this.custPerHour.push(numCust);
  }
};

CookieStore.prototype.calcCookiesPerHour = function () {
  for (let i = 0; i < this.custPerHour.length; i++) {
    let cookiesSold = Math.floor(this.custPerHour[i] * this.avgSale);
    this.cookiesPerHour.push(cookiesSold);
  }
};

CookieStore.prototype.render = function () {
  this.calcCustPerHour();
  this.calcCookiesPerHour();

  // table
  const table = document.getElementById("myTable");

  // table row
  const tr = document.createElement("tr");
  table.appendChild(tr);

  // table cell
  let td = document.createElement("td");
  td.textContent = this.name;
  tr.appendChild(td);

  let total = 0;

  // get data into the row
  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    td = document.createElement("td");
    td.textContent = this.cookiesPerHour[i];
    tr.appendChild(td);

    total = total + this.calcCookiesPerHour[i];
  }
  // total cell
  td = document.createElement("td");
  td.textContent = total;
  tr.appendChild(td);
};

function makeHeaderRow() {
  // table
  const table = document.getElementById("myTable");

  // table row
  const tr = document.createElement("tr");
  table.appendChild(tr);

  // empty cell to start
  let th = document.createElement("th");
  tr.appendChild(th);

  // get data into the row
  for (let i = 0; i < hours.length; i++) {
    th = document.createElement("th");
    th.textContent = hours[i];
    tr.appendChild(th);
  }
  // total cell
  th = document.createElement("th");
  th.textContent = "Totals";
  tr.appendChild(th);
}

makeHeaderRow();

const seattle = new CookieStore("Seattle", 23, 65, 6.3);
const tokyo = new CookieStore("Tokyo", 3, 24, 1.2);
const dubai = new CookieStore("Dubai", 11, 38, 3.7);
const paris = new CookieStore("Paris", 20, 38, 2.3);
const lima = new CookieStore("Lima", 2, 16, 4.6);

const stores = [seattle, tokyo, dubai, paris, lima];

for (let i = 0; i < stores.length; i++) {
  stores[i].render();
}
// total row
function totalRow() {
  // table
  const table = document.getElementById("myTable");

  // table row
  const tr = document.createElement("tr");
  table.appendChild(tr);

  // table cell
  let td = document.createElement("td");
  td.textContent = "Totals";
  tr.appendChild(td);
  let fullTotal = 0;
  // loop round every hour to get each hours total
  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;

    // loop through each store to help get the hours total
    for (let k = 0; k < stores.length; k++) {
      hourlyTotal = hourlyTotal + stores[k].cookiesPerHour[i];
    }

    // hoursly total cell
    let td = document.createElement("td");
    td.textContent = hourlyTotal;
    tr.appendChild(td);

    fullTotal = fullTotal + hourlyTotal;
  }

  // total total
  td = document.createElement("td");
  td.textContent = fullTotal;
  tr.appendChild(td);
}
totalRow();

// Event Listeners

// Event Listeners

const form = document.getElementById("new-store-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const storeNameInput = event.target.name.value;
  const minCustInput = event.target.minCust.value;
  const maxCustInput = event.target.maxCust.value;
  const avgCookieInput = event.target.avgCookies.value;

  console.log(storeNameInput);
  console.log(minCustInput);
  console.log(maxCustInput);
  console.log(avgCookieInput);

  form.reset();

  const newStore = new CookieStore(
    storeNameInput,
    minCustInput,
    maxCustInput,
    avgCookieInput
  );

  newStore.render();
});

// contact us
const contact = document.getElementById("customers-form");

contact.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullNameInput = event.target.name.value;
  const emailInput = event.target.email.value;
  const passWordInput = event.target.passWord.value;
  const addressInput = event.target.address.value;
  const postCodeInput = event.target.postCode.value;
  const msg = event.target.txt.value;

  console.log(fullNameInput);
  console.log(emailInput);
  console.log(passWordInput);
  console.log(addressInput);
  console.log(postCodeInput);
  console.log(msg);

  contact.reset();
});
contact.render();

// form validatiom

// const seattle = {
//   name: "Seattle",
//   minCust: 23,
//   maxCust: 65,
//   avgSale: 6.3,
//   custPerHour: [],
//   cookiesPerHour: [],
//   calcCustPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let numCust = randomNum(this.minCust, this.maxCust);
//       this.custPerHour.push(numCust);
//     }
//   },
//   calcCookiesPerHour: function () {
//     for (let i = 0; i < this.custPerHour.length; i++) {
//       this.cookiesPerHour.push(Math.floor(this.custPerHour[i] * this.avgSale));
//     }
//   },
//   render: function () {
//     this.calcCustPerHour();
//     this.calcCookiesPerHour();

//     const div = document.getElementById(this.name);

//     const h2 = document.createElement("h2");
//     h2.textContent = this.name;
//     div.appendChild(h2);

//     const ul = document.createElement("ul");
//     div.appendChild(ul);

//     for (let i = 0; i < this.cookiesPerHour.length; i++) {
//       const li = document.createElement("li");
//       li.textContent = this.cookiesPerHour[i] + " cookies";
//       ul.appendChild(li);
//     }
//   },
// };

// const tokyo = {
//   name: "Tokyo",
//   minCust: 3,
//   maxCust: 24,
//   avgSale: 1.2,
//   custPerHour: [],
//   cookiesPerHour: [],
//   calcCustPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let numCust = randomNum(this.minCust, this.maxCust);
//       this.custPerHour.push(numCust);
//     }
//   },
//   calcCookiesPerHour: function () {
//     for (let i = 0; i < this.custPerHour.length; i++) {
//       this.cookiesPerHour.push(Math.floor(this.custPerHour[i] * this.avgSale));
//     }
//   },
//   render: function () {
//     this.calcCustPerHour();
//     this.calcCookiesPerHour();

//     const div = document.getElementById(this.name);

//     const h2 = document.createElement("h2");
//     h2.textContent = this.name;
//     div.appendChild(h2);

//     const ul = document.createElement("ul");
//     div.appendChild(ul);

//     for (let i = 0; i < this.cookiesPerHour.length; i++) {
//       const li = document.createElement("li");
//       li.textContent = this.cookiesPerHour[i] + " cookies";
//       ul.appendChild(li);
//     }
//   },
// };
