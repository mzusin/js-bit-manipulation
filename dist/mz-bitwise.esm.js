/* 
Bit Manipulation in JavaScript v1.0.0
A collection of bit manipulation helpers written TypeScript.
https://github.com/mzusin/js-bit-manipulation
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var n=e=>(e&1)===0,t=e=>(e&1)===1,o=e=>{if(!Number.isInteger(e))throw new Error("Input must be an integer.");return e>>1},u=e=>{if(!Number.isInteger(e))throw new Error("Input must be an integer.");return e<<1},b=(e,r)=>{if(!Number.isInteger(e)||!Number.isInteger(r))throw new Error("Input must be an integer.");return(e^r)===0};export{o as divideBy2,b as equals,n as isEven,t as isOdd,u as multiplyBy2};
