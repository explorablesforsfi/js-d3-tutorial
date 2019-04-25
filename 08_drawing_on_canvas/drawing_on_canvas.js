"use strict";

let width = 200, height = 200;

let canvas = d3.select("body")
               .append("canvas");

canvas.attr("width",width).attr("height",height);

let context = canvas.node().getContext('2d');

context.lineWidth = 10;
context.strokeStyle = "#abc";
context.beginPath();
context.moveTo(10,10);
context.lineTo(90,90);
context.stroke();



