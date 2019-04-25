"use strict";

let button = d3.select("body")
               .append("button")
               .text("pause")
               .on("click", function() {
                 if (button.text() == 'pause')
                 {
                   timer.stop();
                   button.text("play");
                 }
                 else
                 {
                   timer.restart(update);
                   button.text("pause");
                 }
               });



