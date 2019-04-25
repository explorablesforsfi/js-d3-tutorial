"use strict";

class Rotator {

  constructor(div_id, width, height)
  {
    this.width = width;
    this.height = height;
    this.canvas = d3.select(div_id).append("canvas")
                    .attr("width",width).attr("height",height);

    this.context = this.canvas.node().getContext('2d');
    this.context.lineWidth = 10;       // set drawing line styles
    this.context.strokeStyle = "#abc";

    this.angle = 0;             // initial angle
    this.d_angle = Math.PI/25;  // increase angle by pi/25 per update
    this.x0 = this.width/2;          // origin
    this.y0 = this.height/2;        
    this.radius = this.height/2;     // radius of line

    // initial situation is that it is not running
    this.is_running = false;

    this.init_button(div_id);
    
  }

  init_button(div_id)
  {
    // `this` usually refers to the last defined function in the call stack,
    // i.e. in this case to the class (which is syntactic sugar for a function
    // we're saving this reference to the class in a local variable
    let self = this;

    this.button = d3.select(div_id)
                   .append("button")
                   .text("pause")
                   .on("click", function() {
                     // here, `this` would refer to the button and
                     // therefore we use `self` which we declared ealrier 
                     // and which refers to the Rotator class
                     console.log(this,self);
                     self.playpause(self);
                   });
  }

  playpause(self=null){
    
    //if playpause is just called as playpause(), assume that the call came
    //from within the class and as such, `this` refers to the class.
    //otherwise, `self` is assumed to be explicitly given when called
    //(e.g. when a button is pressed)
    if (self === null)
      self = this;

    if (!self.is_running)
    {
      self.timer = d3.interval( function () { 
                       // here, `this` would refer to the timer and
                       // therefore we use `self` which we declared ealrier 
                       // and which refers to the Rotator object
                        self.update(self);
                   } ,25); // update drawing every 25ms
      self.button.text('pause');
    }
    else
    {
      self.button.text('play');
      self.timer.stop();
    }

    // change running status
    self.is_running = !self.is_running;
  }

  update(self=null)
  {
    //if playpause is just called as update(), assume that the call came
    //from within the class and as such, `this` refers to the class.
    //otherwise, `self` is assumed to be explicitly given when called
    //(e.g. when the timer calls this function)
    if (self === null)
      self = this;

    self.context.clearRect(0,0,self.width,self.height); // clear drawing
    self.context.beginPath();                 // start line
    self.context.moveTo(self.x0,self.y0);               // move to origin

    let x1 = self.radius * Math.cos(self.angle) + self.x0; // compute updated
    let y1 = self.radius * Math.sin(self.angle) + self.y0; // position

    self.context.lineTo(x1,y1);               // end point of line
    self.context.stroke();                    // draw

    self.angle += self.d_angle;  // update angle
  }

}




