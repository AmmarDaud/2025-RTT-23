// Example function template for addition
function add(a: number = 0, b: number = 0): number {
  return a + b;
}
 
// Division function with zero handling
function divide(a: number, b: number = 1): number | null {
  return b === 0 ? null : a / b;
}

// Subtrtction function with zero handling
function subtract(a: number = 0, b: number = 0): number {
  return a - b;

}

// Multiplication function with zero handling
 function multiply(a: number = 1, b: number = 1): number {
  return a * b;
}

// Function overloads for calculating squares or summing arrays
function calculate(value: number): number;
function calculate(values: number[]): number;
 
function calculate(input: number | number[]): number {
  if (typeof input === "number") {
    return input ** 2;
  } else {
    return input.reduce((acc, val) => acc + val, 0);
  }
}

// Apply user-defined rule to round numbers
function applyRule(num: number, rule: (n: number) => number): number {
  return rule(num);
}
 
// Example of using applyRule with a rounding rule
const roundToTenth = (n: number) => Math.round(n * 10) / 10;
//console.log(applyRule(5.678, roundToTenth)); // Outputs 5.7
