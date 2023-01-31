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

const seattle = {
  name: "Seattle",
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  custPerHour: [],
  cookiesPerHour: [],
  calcCustPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let numCust = randomNum(this.minCust, this.maxCust);
      this.custPerHour.push(numCust);
    }
    this.calcCookiesPerHour();
  },
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      console.log("here");
      this.cookiesPerHour.push(this.custPerHour[i] * this.avgSale);
    }
  },
  render: function () {
    this.calcCustPerHour();

    const seattleDiv = document.getElementById("seattle");

    const h2 = document.createElement("h2");
    h2.textContent = seattle.name;
    seattleDiv.appendChild(h2);

    const ul = document.createElement("ul");
    seattleDiv.appendChild(ul);

    for (let i = 0; i < seattle.cookiesPerHour.length; i++) {
      console.log("here");
      const li = document.createElement("li");
      li.textContent = seattle.cookiesPerHour[i] + " cookies";
      ul.appendChild(li);
      console.log(seattle.cookiesPerHour[i]);
    }
  },
};
seattle.render();
console.log(seattle);

// constructor has a capital letter
function CookieStore(name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
}

CookieStore.prototype.getAvgCookiesCount = function () {
  console.log("some random number!");
};

const Seattle = new CookieStore("Seattle", 23, 65, 6.3);
const tokyo = new CookieStore("Tokyo", 3, 24, 1.2);
const anotherCookieStore = new CookieStore("anotherCookieStore", 5, 45, 3.3);

const stores = [pikePlace, otherStore, anotherCookieStore];

// DOM manipulation section (creating a tables)
const tableEl = document.createElement("table");

for (let i = 0; i < stores.length; i++) {
  const rowEl = document.createElement("tr");
  const currentStore = stores[i];

  let el = document.createElement("th");
  el.textContent = currentStore.name;
  rowEl.appendChild(el);

  el = document.createElement("td");
  el.textContent = currentStore.minCust;
  rowEl.appendChild(el);

  el = document.createElement("td");
  el.textContent = currentStore.maxCust;
  rowEl.appendChild(el);

  el = document.createElement("td");
  el.textContent = currentStore.avgCookie;
  rowEl.appendChild(el);
  tableEl.appendChild(rowEl);
}

document.body.appendChild(tableEl);
