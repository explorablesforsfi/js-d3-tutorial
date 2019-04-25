"use strict";

let width = 200, height = 200;
let canvas = d3.select("body").append("canvas")
               .attr("width",width).attr("height",height);
let context = canvas.node().getContext('2d');
let timer = d3.interval(update,25) // update drawing every 25ms

context.lineWidth = 10;       // set drawing line styles
context.strokeStyle = "#abc";

let angle = 0;             // initial angle
let d_angle = Math.PI/25;  // increase angle by pi/25 per update
let x0 = width/2;          // origin
let y0 = height/2;        
let radius = height/2;     // radius of line

function update ()
{
  context.clearRect(0,0,width,height); // clear drawing
  context.beginPath();                 // start line
  context.moveTo(x0,y0);               // move to origin

  let x1 = radius * Math.cos(angle) + x0; // compute updated
  let y1 = radius * Math.sin(angle) + y0; // position

  context.lineTo(x1,y1);               // end point of line
  context.stroke();                    // draw

  angle += d_angle;  // update angle
}



