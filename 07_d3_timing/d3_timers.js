"use strict";

let p = d3.select("p")
                 .text("hey")
                 .attr("align", "center")
                 .attr("style", "font-size: 30px; border: 1px solid black")
              ;

let timer = d3.interval(update, 1000); // call `update` every second


let state = 0;
let aligns = ["left","center","right"]

function update() {
  p.attr("align",aligns[state % 3])

  state++; // state = state + 1
}


