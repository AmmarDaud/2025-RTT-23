// F. Biggie Smalls
// Create a variable that contains an integer.
let randomNumber = Math.floor(Math.random()*200)
console.log(randomNumber);
//math.random() ---> .001 * 1000 = 10
// Write an if ... else statement that:
// console.log() "little number" if the number is entered is less than 100
// console.log()  big number if the number is greater than or equal to 100.
if (randomNumber < 100){
    console.log("Little number");
}else{
    console.log("Big Number");
}
// G. Monkey in the Middle
// Write an if ... else if ... else statement:
// console.log() "little number" if the number entered is less than 5.
// If the number entered is more than 10, log "big number".
// Otherwise, log "monkey".
const monkeyNumber = Math.floor(Math.random()*15)
console.log(monkeyNumber);
if(monkeyNumber<5){
    console.log("little Monkey Number");
}else if(monkeyNumber > 10){
    console.log("Big Monkey Number");
}else{
    console.log("MONKEY!!!");
}
// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];
// // Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)
// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(6,0, "raybans")
console.log(kristynsCloset);
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset[5] = "stained yellow knit hat"
console.log(kristynsCloset[5]);
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
console.log(thomsCloset[0][0])
// In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][2]);
// Access one item from Thom's accessories array.
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
let thomsShirts = thomsCloset[0][0]
let thomsPants = thomsCloset[1][1]
let thomsAccesories = thomsCloset[2][1]
console.log("Thom is looking fierce in a grey button-up, jeans and wool scarf!"); //non dynamic
console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][1] + "!"); //dynamic, buuuuuuuut.... messy
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][1]}!`); //dynamic with back ticks, buuuutt...... still unclear
console.log(`Thom is looking fierce in a ${thomsShirts}, ${thomsPants} and ${thomsAccesories}!`);
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "footie pajamas"
console.log(thomsCloset);
// IV. Functions
// A. printGreeting
// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?
function printGreeting(name){
    return `Hello there, ${name}`
}
// Like so?
console.log(printGreeting("Slimer"));
// B. printCool
// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
function printCool(name){
    return `${name} is cool!`
}
 console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool";
// C. calculateCube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
function calculateCube(num){
    console.log(num**3);
}
calculateCube(5)
// => 125
// D. isVowel
// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
function isVowel(char){
    const vowels = ['a','e','i','o','u']
    console.log(char);
    return vowels.includes(char.toLowerCase())
}
console.log(isVowel("A"));
// => true
// E. getTwoLengths
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
function getTwoLengths(str1, str2){
    return [str1.length, str2.length]
}
 console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]
// F. getMultipleLengths
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
function getMultipleLengths(ArrayOfStrings){
    return ArrayOfStrings.map(forEachString => forEachString.length)
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// => [5, 4, 2, 2, 4]
// G. maxOfThree
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
// console.log(maxOfThree(6, 9, 1));
// => 9
// Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().
// H. printLongestWord
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
function printLongestWord(words){
    //create a variable to store our longest word and assigned it the first word as a default
    let longestWord = words[0]
    //created a loop that would check each word
    for(let word of words){
        //created the condition to check if the current word was longer than the current longest word
       if(word.length > longestWord.length) {
        console.log(`${longestWord} is not longer than ${word}`)
        //if the current word was longer than the longest word, then we should update the longest word to our current one
        longestWord = word
       }
       console.log(longestWord);
    }
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"
// Objects
// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.
// A. Make a user object
// let user = [name, address, pastOrders, age]
// user["Bob","70 Boulevard Beverely Hills", 'game, soda, book', 30]
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.
let user = {
    name: "Johnny Cash",
    email: "FolsomPrisonBlues@gmail.com",
    age: 87,
    purchased:[]
}
let user1 = {
    name: "Bob",
    email: "FolsomPrisonBlues@gmail.com",
    age: 87,
    purchased:[]
}
let user2 = {
    name: "Alice",
    email: "FolsomPrisonBlues@gmail.com",
    age: 87,
    purchased:[]
}
let user3 = {
    name: "James",
    email: "FolsomPrisonBlues@gmail.com",
    age: 87,
    purchased:[]
}
console.log(user);
// B. Update the user
// Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
user.email = "JohnnyCashHadNoEmail@gmail.com"
console.log(user);
// Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++
user.age++
console.log(user);
// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.
// Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).
user.location = "Nashville"
console.log(user);
const users = [user, user1, user2, user3]
console.log(users);