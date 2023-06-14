/* 
Bit Manipulation in JavaScript v1.0.0
A collection of bit manipulation helpers written TypeScript.
https://github.com/mzusin/js-bit-manipulation
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var o=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var s=Object.getOwnPropertyNames;var m=Object.prototype.hasOwnProperty;var i=(e,r)=>{for(var n in r)o(e,n,{get:r[n],enumerable:!0})},p=(e,r,n,u)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of s(r))!m.call(e,t)&&t!==n&&o(e,t,{get:()=>r[t],enumerable:!(u=b(r,t))||u.enumerable});return e};var g=e=>p(o({},"__esModule",{value:!0}),e);var f={};i(f,{divideBy2:()=>I,equals:()=>w,getLSB:()=>l,isEven:()=>x,isOdd:()=>c,multiplyBy2:()=>a,removeLSB:()=>d});module.exports=g(f);var x=e=>(e&1)===0,c=e=>(e&1)===1,I=e=>{if(!Number.isInteger(e))throw new Error("Input must be an integer.");return e>>1},a=e=>{if(!Number.isInteger(e))throw new Error("Input must be an integer.");return e<<1},w=(e,r)=>{if(!Number.isInteger(e)||!Number.isInteger(r))throw new Error("Input must be an integer.");return(e^r)===0},l=e=>e&1,d=e=>e>>1;0&&(module.exports={divideBy2,equals,getLSB,isEven,isOdd,multiplyBy2,removeLSB});
