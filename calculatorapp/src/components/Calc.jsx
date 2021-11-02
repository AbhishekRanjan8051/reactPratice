// import React from "react";

function add(a, b) {
  let sum = a + b;
  return sum;
}

function sub(a, b) {
  let subtract = a - b;
  return subtract;
}

function multi(a, b) {
  let multiply = a * b;
  return multiply;
}

function div(a, b) {
  let division = (a / b).toFixed(2);
  return division;
}
export { add, sub, multi, div };
