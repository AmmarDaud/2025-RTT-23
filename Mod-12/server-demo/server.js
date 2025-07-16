// const { greet, add, subtract } = require("./my-module");
import { greet, add, subtract } from "./my-module.js";
import { multiply } from "./other-module.js";
import express from 'express'


const app = express();

console.log(greet("Ammar Daud"));
console.log("Hello from Server.js");

console.log(add(5, 5));
console.log(subtract(15, 5));

console.log(multiply(5, 5));