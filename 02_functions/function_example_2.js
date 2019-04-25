"use strict";

function get_string_representation(a) {
  return "" + a;
}

function print(a) {
  console.log(get_string_representation(a));
}

// the variable `yello` is still declared 
// from function_example_1.js
print(yello);

// print a number
let number = 2; 
print(number);

print_simple(yello);



