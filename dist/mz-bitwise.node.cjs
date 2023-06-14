/* 
Bit Manipulation in JavaScript v1.0.0
A collection of bit manipulation helpers written TypeScript.
https://github.com/mzusin/js-bit-manipulation
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var o=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var i=Object.getOwnPropertyNames;var m=Object.prototype.hasOwnProperty;var s=(r,e)=>{for(var t in e)o(r,t,{get:e[t],enumerable:!0})},p=(r,e,t,u)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of i(e))!m.call(r,n)&&n!==t&&o(r,n,{get:()=>e[n],enumerable:!(u=b(e,n))||u.enumerable});return r};var x=r=>p(o({},"__esModule",{value:!0}),r);var l={};s(l,{divideBy2:()=>d,isEven:()=>a,isOdd:()=>c,multiplyBy2:()=>g});module.exports=x(l);var a=r=>(r&1)===0,c=r=>(r&1)===1,d=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r>>1},g=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r<<1};0&&(module.exports={divideBy2,isEven,isOdd,multiplyBy2});
