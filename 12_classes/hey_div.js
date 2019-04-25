"use strict";

class heyDiv {

  constructor(div_id)
  {
    this.div = d3.select(div_id);
    this.div.text("hey");
  }

  changecolor()
  {
    this.div
        .attr("style", "color: rgb(" + (255*Math.random()) +","
                              + (255*Math.random()) + "," 
                              + (255*Math.random()) 
                           +")"
             );
  }
}

let hey = new heyDiv("#container");



