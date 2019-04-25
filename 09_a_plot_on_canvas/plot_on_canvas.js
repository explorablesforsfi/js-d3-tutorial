"use strict";

// create canvas
let width = 200, height = 200;
let canvas = d3.select("body").append("canvas")
               .attr("width",width).attr("height",height);
let context = canvas.node().getContext('2d');

// a map function .. map [0,2pi] to the canvas [0,width]
let xScale = d3.scaleLinear().domain([0,2*Math.PI]).range([0,width]);

// a map function .. map [-1,1] to the canvas [height,0] 
// (flip coordinate system)
let yScale = d3.scaleLinear().domain([-1,+1]).range([height,0]);

// create x values from 0 to 2pi
let N_values = 1000;
let x = d3.range(N_values).map( n => n/N_values*2*Math.PI);

// compute y = sin(x)
let y = x.map( _x => Math.sin(_x) );

// draw
context.lineWidth = 1;
context.strokeStyle = "#000";
context.beginPath();

context.moveTo(xScale(x[0]),yScale(y[0]));

for (let i=1; i<x.length; ++i)
  context.lineTo(xScale(x[i]),yScale(y[i]));

context.stroke();



