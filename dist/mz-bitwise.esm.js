/* 
Bit Manipulation in JavaScript v1.0.0
A collection of bit manipulation helpers written TypeScript.
https://github.com/mzusin/js-bit-manipulation
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var e=r=>(r&1)===0,n=r=>(r&1)===1,t=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r>>1},o=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r<<1};export{t as divideBy2,e as isEven,n as isOdd,o as multiplyBy2};
