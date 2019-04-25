"use strict";

let a = [1,2,3];

for(let i=0; i<a.length; ++i) {
  console.log(a[i]);
}

a.forEach( function (element) {
  console.log(element);
});

let c = a.map(function (element) { return Math.sin(element*Math.PI/2) });
let d = a.map(element => Math.sin(element*Math.PI/2) );

console.log(c);
console.log(d);


