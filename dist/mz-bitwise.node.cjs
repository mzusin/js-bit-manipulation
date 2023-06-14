/* 
Bit Manipulation in JavaScript v1.0.0
A collection of bit manipulation helpers written TypeScript.
https://github.com/mzusin/js-bit-manipulation
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var o=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var s=Object.getOwnPropertyNames;var i=Object.prototype.hasOwnProperty;var m=(e,r)=>{for(var n in r)o(e,n,{get:r[n],enumerable:!0})},p=(e,r,n,u)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of s(r))!i.call(e,t)&&t!==n&&o(e,t,{get:()=>r[t],enumerable:!(u=b(r,t))||u.enumerable});return e};var g=e=>p(o({},"__esModule",{value:!0}),e);var d={};m(d,{divideBy2:()=>a,equals:()=>w,getLSB:()=>l,isEven:()=>x,isOdd:()=>I,multiplyBy2:()=>c});module.exports=g(d);var x=e=>(e&1)===0,I=e=>(e&1)===1,a=e=>{if(!Number.isInteger(e))throw new Error("Input must be an integer.");return e>>1},c=e=>{if(!Number.isInteger(e))throw new Error("Input must be an integer.");return e<<1},w=(e,r)=>{if(!Number.isInteger(e)||!Number.isInteger(r))throw new Error("Input must be an integer.");return(e^r)===0},l=e=>e&1;0&&(module.exports={divideBy2,equals,getLSB,isEven,isOdd,multiplyBy2});
