"use strict";

function Person(fname, lname, oaddress) {
  this.firstName = fname;
  this.lastName = lname;
  this.officeAddress = oaddress;
}

const aditya = new Person(
  "aditya",
  "raj",
  "boring road opp. HDFC bank"
);
console.log(aditya);

const ankit = new Person(
  "Ankit",
  "anand",
  "patliputra near sahyog hospital"
);
console.log(ankit);

const rakesh = new Person(
  "Rakesh",
  "kumar",
  "near check post, digha"
);
console.log(rakesh);
