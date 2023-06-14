/* 
Bit Manipulation in JavaScript v1.0.0
A collection of bit manipulation helpers written TypeScript.
https://github.com/mzusin/js-bit-manipulation
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var o=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var i=Object.getOwnPropertyNames;var s=Object.prototype.hasOwnProperty;var m=(e,r)=>{for(var t in r)o(e,t,{get:r[t],enumerable:!0})},p=(e,r,t,u)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of i(r))!s.call(e,n)&&n!==t&&o(e,n,{get:()=>r[n],enumerable:!(u=b(r,n))||u.enumerable});return e};var g=e=>p(o({},"__esModule",{value:!0}),e);var l={};m(l,{divideBy2:()=>w,equals:()=>c,isEven:()=>I,isOdd:()=>a,multiplyBy2:()=>x});module.exports=g(l);var I=e=>(e&1)===0,a=e=>(e&1)===1,w=e=>{if(!Number.isInteger(e))throw new Error("Input must be an integer.");return e>>1},x=e=>{if(!Number.isInteger(e))throw new Error("Input must be an integer.");return e<<1},c=(e,r)=>{if(!Number.isInteger(e)||!Number.isInteger(r))throw new Error("Input must be an integer.");return(e^r)===0};0&&(module.exports={divideBy2,equals,isEven,isOdd,multiplyBy2});
