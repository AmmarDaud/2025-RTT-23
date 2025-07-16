function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}
const double = createMultiplier(2);
console.log(double(5)); 



function applyDiscount(discountRate) {
  return function(Price) {
    return Price - (Price * discountRate);
  };
}

const tenPercentDiscount = applyDiscount(0.10);
console.log(tenPercentDiscount(100)); 




function fetchUser(callback) {
  setTimeout(() => {
    const user = { name: "Alice", age: 25 };
    callback(user);
  }, 1000); 
}

fetchUser((user) => console.log("Fetched User:", user));